import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, finalize, Observable, switchMap, throwError } from 'rxjs';
import { AuthErrorService } from '@features/auth/services/auth-error.service';
import { TokenService } from '@features/auth/services/token.service';
import { HttpHeader } from '@core/values';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  private tokenUpdating = false;

  constructor(private authErrorService: AuthErrorService, private tokenService: TokenService) {}

  private addHeaders(req: HttpRequest<any>, token: string): HttpRequest<any> {
    const bearerToken = `Bearer ${token}`;
    const headers = req.headers.set(HttpHeader.AUTHORIZATION, bearerToken);
    return req.clone({ headers });
  }

  private handleTokenUpdating(
    request: HttpRequest<any>,
    next: HttpHandler,
    updatingCallback: () => Observable<any>,
  ) {
    if (!this.tokenUpdating) {
      this.tokenUpdating = true;

      return updatingCallback().pipe(
        switchMap(() => {
          const { accessToken } = this.tokenService;
          const newRequest = this.addHeaders(request, accessToken);

          return next.handle(newRequest);
        }),
        finalize(() => {
          this.tokenUpdating = false;
        }),
      );
    }

    const newRequest = this.addHeaders(request, this.tokenService.accessToken);
    return next.handle(newRequest);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { accessToken } = this.tokenService;

    return next.handle(this.addHeaders(request, accessToken)).pipe(
      catchError(({ error, status }: HttpErrorResponse) => {
        if (status === 401) {
          const updatingCallback = () => this.tokenService.refresh(accessToken);
          return this.handleTokenUpdating(request, next, updatingCallback);
        }

        if (!!error.error_code) {
          this.authErrorService.handleError(error);
        }

        return throwError(error);
      }),
    );
  }
}

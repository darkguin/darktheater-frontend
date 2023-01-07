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
import { ApiErrorCodes, HttpHeader, NavigationFullPath, RoutePath } from '@core/values';
import { AuthService } from '@features/auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  private tokenUpdating = false;

  constructor(
    private authErrorService: AuthErrorService,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { accessToken, refreshToken } = this.tokenService;

    return next.handle(this.addHeaders(request, accessToken)).pipe(
      catchError(({ error }: HttpErrorResponse) => {
        if (error?.error_code === ApiErrorCodes.ACCESS_TOKEN_EXPIRED) {
          return this.handleTokenUpdating(request, next, refreshToken);
        }

        if (error?.error_code === ApiErrorCodes.REFRESH_TOKEN_NOTFOUND) {
          this.authService.signOut();
          this.router.navigate([NavigationFullPath[RoutePath.SIGN_IN]]);
          return throwError(error);
        }

        if (!!error.error_code) {
          this.authErrorService.handleError(error);
        }

        return throwError(error);
      }),
    );
  }

  private addHeaders(req: HttpRequest<any>, token: string): HttpRequest<any> {
    const bearerToken = `Bearer ${token}`;
    const headers = req.headers.set(HttpHeader.AUTHORIZATION, bearerToken);
    return req.clone({ headers });
  }

  private handleTokenUpdating(request: HttpRequest<any>, next: HttpHandler, refreshToken: string) {
    if (!this.tokenUpdating) {
      this.tokenUpdating = true;

      return this.tokenService.refresh(refreshToken).pipe(
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
}

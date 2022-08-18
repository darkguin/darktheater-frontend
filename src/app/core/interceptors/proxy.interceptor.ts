import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import urlJoin from 'url-join';
import { environment } from '@/environments/environment';

export const BASE_API_URL = 'api';
export const BASE_API_VERSION = 'v1';

@Injectable({
  providedIn: 'root',
})
export class ProxyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = urlJoin(environment.baseUrl, BASE_API_URL, BASE_API_VERSION, request.url);
    request = request.clone({ url });
    return next.handle(request);
  }
}

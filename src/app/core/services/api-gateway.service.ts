import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '@core/values';
import urlJoin from 'url-join';
import { environment } from '@/environments/environment';
import { Observable } from 'rxjs';

interface HttpOptions {
  headers?: HttpHeaders | { [p: string]: string | string[] };
  context?: HttpContext;
  params?: HttpParams;
}

@Injectable({
  providedIn: 'root',
})
export class ApiGatewayService {
  readonly BASE_API_VERSION = 'v1';

  constructor(private http: HttpClient) {}

  private buildUrl(path: string, service: ApiService) {
    return urlJoin(environment.baseUrl, service, this.BASE_API_VERSION, path);
  }

  get<T>(path: string, service: ApiService, options?: HttpOptions): Observable<T> {
    const url = this.buildUrl(path, service);
    return this.http.get<T>(url, options);
  }

  post<T>(path: string, service: ApiService, body: any, options?: HttpOptions): Observable<T> {
    const url = this.buildUrl(path, service);
    return this.http.post<T>(url, body, options);
  }

  put<T>(path: string, service: ApiService, body: any, options?: HttpOptions): Observable<T> {
    const url = this.buildUrl(path, service);
    return this.http.put<T>(url, body, options);
  }

  patch<T>(path: string, service: ApiService, body: any, options?: HttpOptions): Observable<T> {
    const url = this.buildUrl(path, service);
    return this.http.patch<T>(url, body, options);
  }

  delete<T>(path: string, service: ApiService, options?: HttpOptions): Observable<T> {
    const url = this.buildUrl(path, service);
    return this.http.delete<T>(url, options);
  }
}

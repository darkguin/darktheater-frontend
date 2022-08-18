import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiAuthorization, ApiCredentials } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  constructor(private api: HttpClient) {}

  signIn(credentials: ApiCredentials): Observable<ApiAuthorization> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const payload = new HttpParams({ fromObject: { ...credentials } });

    return this.api.post<ApiAuthorization>(ApiPath.SIGN_IN, payload.toString(), { headers });
  }

  signUp(credentials: ApiCredentials): Observable<ApiAuthorization> {
    return this.api.post<ApiAuthorization>(ApiPath.SIGN_UP, { ...credentials });
  }

  resetPassword(password: string, token: string): Observable<any> {
    return this.api.post(ApiPath.CHANGE_PASSWORD, {
      new_password: password,
      token,
    });
  }
}

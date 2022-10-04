import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiAuthorization, ApiCredentials } from '@core/models';
import { ApiGatewayService } from '@services/api-gateway.service';
import { ApiService } from '@core/values';

@Injectable({
  providedIn: 'root',
})
export class AuthApi {
  constructor(private api: ApiGatewayService) {}

  signIn(credentials: ApiCredentials): Observable<ApiAuthorization> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const payload = new HttpParams({ fromObject: { ...credentials } });

    return this.api.post<ApiAuthorization>(ApiPath.SIGN_IN, ApiService.AUTH, payload.toString(), {
      headers,
    });
  }

  signUp(credentials: ApiCredentials): Observable<ApiAuthorization> {
    return this.api.post<ApiAuthorization>(ApiPath.SIGN_UP, ApiService.AUTH, { ...credentials });
  }

  resetPassword(password: string, token: string): Observable<any> {
    return this.api.post(ApiPath.CHANGE_PASSWORD, ApiService.AUTH, {
      new_password: password,
      token,
    });
  }
}

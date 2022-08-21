import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiAuthorization, ApiCredentials } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class TokenApi {
  constructor(private api: HttpClient) {}

  refresh(access_token: string): Observable<ApiAuthorization> {
    return this.api.post<ApiAuthorization>(ApiPath.REFRESH_TOKEN, { access_token });
  }
}

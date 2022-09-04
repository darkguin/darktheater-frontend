import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiAuthorization } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class TokenApi {
  constructor(private api: HttpClient) {}

  refresh(refresh_token: string): Observable<ApiAuthorization> {
    return this.api.post<ApiAuthorization>(ApiPath.REFRESH_TOKEN, { refresh_token });
  }
}

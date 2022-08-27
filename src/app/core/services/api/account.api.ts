import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiSuccessResponse } from '@models/api/api-success-response.model';
import { ApiUser } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class AccountApi {
  constructor(private api: HttpClient) {}

  get(): Observable<ApiUser> {
    return this.api.get<ApiUser>(ApiPath.CURRENT_USER);
  }

  updateUsername(username: string): Observable<ApiUser> {
    return this.api.patch<ApiUser>(ApiPath.CURRENT_USER, { username });
  }

  delete(token: string): Observable<ApiSuccessResponse> {
    return this.api.delete<ApiSuccessResponse>(`${ApiPath.CURRENT_USER}?token=${token}`);
  }

  changePassword(password: string, token: string): Observable<ApiSuccessResponse> {
    return this.api.put<ApiSuccessResponse>(ApiPath.CHANGE_PASSWORD, {
      token,
      new_password: password,
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiSuccessResponse } from '@models/api/api-success-response.model';
import { ApiUser } from '@core/models';
import { ApiGatewayService } from '@services/api-gateway.service';
import { ApiService } from '@core/values';

@Injectable({
  providedIn: 'root',
})
export class AccountApi {
  constructor(private api: ApiGatewayService) {}

  get(): Observable<ApiUser> {
    return this.api.get<ApiUser>(ApiPath.CURRENT_USER, ApiService.AUTH);
  }

  updateUsername(username: string): Observable<ApiUser> {
    return this.api.patch<ApiUser>(ApiPath.CURRENT_USER, ApiService.AUTH, { username });
  }

  delete(token: string): Observable<ApiSuccessResponse> {
    return this.api.delete<ApiSuccessResponse>(
      `${ApiPath.CURRENT_USER}?token=${token}`,
      ApiService.AUTH,
    );
  }

  changePassword(password: string, token: string): Observable<ApiSuccessResponse> {
    return this.api.put<ApiSuccessResponse>(ApiPath.CHANGE_PASSWORD, ApiService.AUTH, {
      token,
      new_password: password,
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiSuccessResponse } from '@models/api/api-success-response.model';
import { ApiAuthorization } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class ConfirmApi {
  constructor(private api: HttpClient) {}

  sendConfirmEmail(email: string, type: string): Observable<ApiAuthorization> {
    return this.api.post<ApiAuthorization>(ApiPath.EMAIL_CONFIRMATION, {
      email: email,
      email_type: type,
    });
  }

  confirmEmail(token: string): Observable<ApiSuccessResponse> {
    return this.api.post<ApiSuccessResponse>(ApiPath.EMAIL_VERIFICATION, { token });
  }
}

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

  sendConfirmEmail(type: string, auth?: boolean, email?: string): Observable<ApiAuthorization> {
    const body: any = { email_type: type };

    const apiPath = auth ? ApiPath.EMAIL_CONFIRMATION_WITH_AUTH : ApiPath.EMAIL_CONFIRMATION;

    if (!auth) body.email = email;

    return this.api.post<ApiAuthorization>(apiPath, body);
  }

  confirmEmail(token: string): Observable<ApiSuccessResponse> {
    return this.api.post<ApiSuccessResponse>(ApiPath.EMAIL_VERIFICATION, { token });
  }
}

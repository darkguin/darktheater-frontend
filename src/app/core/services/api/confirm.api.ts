import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiSuccessResponse } from '@models/api/api-success-response.model';
import { ApiAuthorization } from '@core/models';
import { ApiGatewayService } from '@services/api-gateway.service';
import { ApiService } from '@core/values';

@Injectable({
  providedIn: 'root',
})
export class ConfirmApi {
  constructor(private api: ApiGatewayService) {}

  sendConfirmEmail(type: string, auth?: boolean, email?: string): Observable<ApiAuthorization> {
    const body: any = { email_type: type };
    if (!auth) body.email = email;

    const apiPath = auth ? ApiPath.EMAIL_CONFIRMATION_WITH_AUTH : ApiPath.EMAIL_CONFIRMATION;
    return this.api.post<ApiAuthorization>(apiPath, ApiService.AUTH, body);
  }

  confirmEmail(token: string): Observable<ApiSuccessResponse> {
    return this.api.post<ApiSuccessResponse>(ApiPath.EMAIL_VERIFICATION, ApiService.AUTH, {
      token,
    });
  }
}

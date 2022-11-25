import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPath } from '@values/api/api-path.enum';
import { ApiAuthorization } from '@core/models';
import { ApiService } from '@core/values';
import { ApiGatewayService } from '@services/api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class TokenApi {
  constructor(private api: ApiGatewayService) {}

  refresh(refresh_token: string): Observable<ApiAuthorization> {
    return this.api.post<ApiAuthorization>(ApiPath.REFRESH_TOKEN, ApiService.AUTH, {
      refresh_token,
    });
  }
}

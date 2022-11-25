import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@services/api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class SerialsApi {
  constructor(private api: ApiGatewayService) {}
}

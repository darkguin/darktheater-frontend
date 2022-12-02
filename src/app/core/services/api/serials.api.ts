import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@services/api-gateway.service';
import { Observable } from 'rxjs';
import { ApiPath, ApiService } from '@core/values';
import { ApiSerial } from '@models/api/api-serial.model';

@Injectable({
  providedIn: 'root',
})
export class SerialsApi {
  constructor(private api: ApiGatewayService) {}

  getAll(page = 1, limit = 10): Observable<ApiSerial[]> {
    const path = `${ApiPath.SERIALS}?page=${page}&size=${limit}`;
    return this.api.get<ApiSerial[]>(path, ApiService.CONTENT);
  }

  get(id: number | string): Observable<ApiSerial> {
    const path = ApiPath.SERIAL.replace(':id', id.toString());
    return this.api.get<ApiSerial>(path, ApiService.CONTENT);
  }
}

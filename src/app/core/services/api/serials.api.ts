import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@services/api-gateway.service';
import { Observable } from 'rxjs';
import { ApiPath, ApiService } from '@core/values';
import { ApiSerial } from '@models/api/api-serial.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SerialsApi {
  constructor(private api: ApiGatewayService) {}

  getAll(page = 1, limit = 10, short = true): Observable<ApiSerial[]> {
    const params = new HttpParams().set('page', page).set('size', limit).set('short', short);
    return this.api.get<ApiSerial[]>(ApiPath.SERIALS, ApiService.CONTENT, { params });
  }

  get(id: number | string): Observable<ApiSerial> {
    const path = ApiPath.SERIAL.replace(':id', id.toString());
    return this.api.get<ApiSerial>(path, ApiService.CONTENT);
  }
}

import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@services/api-gateway.service';
import { ApiPath, ApiService } from '@core/values';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApi {
  constructor(private api: ApiGatewayService) {}

  getAll(page = 1, limit = 10): Observable<any[]> {
    const path = `${ApiPath.MOVIES}?page=${page}&size=${limit}`;
    return this.api.get<any[]>(path, ApiService.CONTENT);
  }

  get(id: number | string): Observable<any> {
    const path = ApiPath.MOVIE.replace(':id', id.toString());
    return this.api.get<any>(path, ApiService.CONTENT);
  }
}

import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@services/api-gateway.service';
import { ApiPath, ApiService } from '@core/values';
import { Observable } from 'rxjs';
import { ApiMovie } from '@core/models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieApi {
  constructor(private api: ApiGatewayService) {}

  getAll(page = 1, limit = 10): Observable<ApiMovie[]> {
    const params = new HttpParams().set('page', page).set('size', limit);
    return this.api.get<ApiMovie[]>(ApiPath.MOVIES, ApiService.CONTENT, { params });
  }

  get(id: number | string): Observable<ApiMovie> {
    const path = ApiPath.MOVIE.replace(':id', id.toString());
    return this.api.get<ApiMovie>(path, ApiService.CONTENT);
  }
}

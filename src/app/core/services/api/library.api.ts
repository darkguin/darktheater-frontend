import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@services/api-gateway.service';
import { Observable } from 'rxjs';
import { ApiPath, ApiService, ContentType, LibraryType } from '@core/values';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibraryApi {
  constructor(private api: ApiGatewayService) {}

  getAll(type: LibraryType, page = 1, limit = 10): Observable<any[]> {
    const path = ApiPath.GET_USER_LIBRARY.replace(':type', type);
    const params = new HttpParams().set('page', page).set('size', limit);
    return this.api.get<any[]>(path, ApiService.CONTENT, { params });
  }

  add(
    id: number | string,
    type: LibraryType,
    contentType: ContentType,
    offset?: number,
  ): Observable<any> {
    return this.api.patch<any>(ApiPath.USER_LIBRARY, ApiService.CONTENT, {
      object_id: id,
      object_type: contentType,
      library_type: type,
      offset,
    });
  }

  update(id: number | string, offset: number): Observable<any> {
    const path = ApiPath.USER_LIBRARY_ITEM.replace(':id', id.toString());
    return this.api.patch<any>(path, ApiService.CONTENT, { offset });
  }

  remove(id: number | string): Observable<any> {
    const path = ApiPath.USER_LIBRARY_ITEM.replace(':id', id.toString());
    return this.api.delete<any>(path, ApiService.CONTENT);
  }
}

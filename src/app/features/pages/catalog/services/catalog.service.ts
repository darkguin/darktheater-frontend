import { Injectable } from '@angular/core';
import { Content } from '@core/models';
import { ContentType } from '@core/values';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { SerialsApi } from '@services/api/serials.api';
import { MovieApi } from '@services/api/movie.api';
import { MovieMapper } from '@core/mappers/movie.mapper';
import { SerialMapper } from '@core/mappers';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly _selectedContent = new BehaviorSubject<ContentType>(ContentType.MOVIE);
  private readonly _data = new BehaviorSubject<Content[]>([]);

  constructor(private serialApi: SerialsApi, private movieApi: MovieApi) {}

  get selectedContent(): ContentType {
    return this._selectedContent.value;
  }

  set selectedContent(contentType: ContentType) {
    this._selectedContent.next(contentType);
  }

  get selectedContent$(): Observable<ContentType> {
    return this._selectedContent.asObservable();
  }

  get contentItems(): Content[] {
    return this._data.value;
  }

  get contentItems$(): Observable<Content[]> {
    return this._data.asObservable();
  }

  updateContent(page = 1, limit = 25) {
    if (this.selectedContent === ContentType.MOVIE) {
      return this.movieApi
        .getAll(page, limit)
        .pipe(map((items) => items.map(MovieMapper.map))) as Observable<Content[]>;
    }

    return this.serialApi
      .getAll(page, limit)
      .pipe(map((items) => items.map(SerialMapper.map))) as Observable<Content[]>;
  }
}

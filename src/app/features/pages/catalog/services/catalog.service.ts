import { Injectable } from '@angular/core';
import { Content } from '@core/models';
import { ContentType } from '@core/values';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { SerialsApi } from '@services/api/serials.api';
import { MovieApi } from '@services/api/movie.api';
import { MovieMapper } from '@core/mappers/movie.mapper';
import { SerialMapper } from '@core/mappers';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private readonly _selectedContent = new BehaviorSubject<ContentType>(ContentType.MOVIE);
  private readonly _data = new Map<ContentType, Content[]>()
    .set(ContentType.MOVIE, [])
    .set(ContentType.SERIAL, []);

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

  get items(): Content[] {
    const type =
      this.selectedContent === ContentType.MOVIE ? ContentType.MOVIE : ContentType.SERIAL;
    return this._data.get(type) || [];
  }

  get movies(): Content[] {
    return this._data.get(ContentType.MOVIE) || [];
  }

  get serials(): Content[] {
    return this._data.get(ContentType.SERIAL) || [];
  }

  loadItems(action: 'new' | 'push', page = 1, limit = 25) {
    return this.selectedContent === ContentType.MOVIE
      ? this.loadMovies(action, page, limit)
      : this.loadSerials(action, page, limit);
  }

  private loadMovies(action: 'new' | 'push', page = 1, limit = 25) {
    if (this.movies?.length && action == 'new') return of([] as Content[]);

    return this.movieApi.getAll(page, limit).pipe(
      map((items) => items.map(MovieMapper.map)),
      tap((items) => {
        action == 'push'
          ? this._data.get(ContentType.MOVIE)?.push(...items)
          : this._data.set(ContentType.MOVIE, items);
      }),
    ) as Observable<Content[]>;
  }

  private loadSerials(action: 'new' | 'push', page = 1, limit = 25) {
    if (this.serials?.length && action == 'new') return of([] as Content[]);

    return this.serialApi.getAll(page, limit).pipe(
      map((items) => items.map(SerialMapper.map)),
      tap((items) => {
        action == 'push'
          ? this._data.get(ContentType.SERIAL)?.push(...items)
          : this._data.set(ContentType.SERIAL, items);
      }),
    ) as Observable<Content[]>;
  }
}

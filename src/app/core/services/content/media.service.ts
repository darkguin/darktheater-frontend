import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Content, Media, Movie, Serial } from '@core/models';
import { MediaMock } from '@mocks/media.mock';
import { ContentType, NavigationFullPath, RoutePath } from '@core/values';
import { SerialsApi } from '@services/api/serials.api';
import { MovieApi } from '@services/api/movie.api';
import { MovieMapper, SerialMapper } from '@core/mappers';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private data = new BehaviorSubject<Media[]>(MediaMock);
  private _data = new BehaviorSubject<Content>({} as Content);

  constructor(private serialApi: SerialsApi, private movieApi: MovieApi) {}

  get content$(): Observable<Content> {
    return this._data.asObservable();
  }

  get content(): Content {
    return this._data.getValue();
  }

  getMovieById(id: string | number): Observable<Movie> {
    return this.movieApi.get(id).pipe(
      map(MovieMapper.map),
      tap((c) => this._data.next(c)),
    );
  }

  getSerialById(id: string | number): Observable<Serial> {
    return this.serialApi.get(id).pipe(
      map(SerialMapper.map),
      tap((c) => this._data.next(c)),
    );
  }

  getById(id: string): Media | undefined {
    return this.data.value.find((item: Media) => item.id === id);
  }

  createContentUrl({ id, contentType }: Media): string {
    return NavigationFullPath[
      contentType === ContentType.MOVIE ? RoutePath.MOVIES : RoutePath.SERIES
    ].replace(':id', id);
  }
}

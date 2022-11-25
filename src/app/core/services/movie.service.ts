import { Injectable } from '@angular/core';
import { MovieApi } from '@services/api/movie.api';
import { map, Observable } from 'rxjs';
import { MovieMapper } from '@core/mappers/movie.mapper';
import { Movie } from '@core/models/content/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private api: MovieApi) {}

  getAll(page: number, limit: number): Observable<Movie[]> {
    return this.api.getAll(page, limit).pipe(map((data) => data.map(MovieMapper.map)));
  }

  get(id: string | number): Observable<Movie> {
    return this.api.get(id).pipe(map(MovieMapper.map));
  }
}

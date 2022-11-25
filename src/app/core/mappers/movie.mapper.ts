import { ImplementsStatic } from '@core/decorators/implements-static.decorator';
import { Actor, Country, Director, Genre, Mapper } from '@core/models';
import { Movie } from '@core/models/content/movie.model';
import { ContentType } from '@core/values';
import { ApiMovie } from '@models/api/api-movie.model';

@ImplementsStatic<Mapper<ApiMovie, Movie>>()
export class MovieMapper {
  static map(api: ApiMovie): Movie {
    return {
      id: api.id,
      contentType: api.content_type as ContentType,
      title: api.title,
      description: api.description,
      year: api.year,
      releaseDate: api.release_date,
      ageLimit: api.age_limit,
      poster: api.poster,
      background: api.background,
      imdbRating: api.imdb_rating,
      imdbVoteCount: api.imdb_vote_count,
      kinopoiskRating: api.kinopoisk_rating,
      kinopoiskVoteCount: api.kinopoisk_vote_count,
      countries: api.countries as Country[],
      genres: api.genres as Genre[],
      actors: api.actors as Actor[],
      directors: api.directors as Director[],
      source: api.source,
      preview: api.preview,
      duration: api.duration,
      createdAt: api.created_at,
    };
  }
}

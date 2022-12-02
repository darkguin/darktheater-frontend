import { ImplementsStatic } from '@core/decorators/implements-static.decorator';
import { Actor, Country, Director, Genre, Mapper, Season } from '@core/models';
import { ContentType } from '@core/values';
import { ApiSeason } from '@models/api/api-season.model';
import { EpisodeMapper } from '@core/mappers/episode.mapper';

@ImplementsStatic<Mapper<ApiSeason, Season>>()
export class SeasonsMapper {
  static map(api: ApiSeason): Season {
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
      episodes: api.episodes.map(EpisodeMapper.map),
    };
  }
}

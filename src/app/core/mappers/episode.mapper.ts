import { ImplementsStatic } from '@core/decorators/implements-static.decorator';
import { Actor, Country, Director, Episode, Genre, Mapper } from '@core/models';
import { ContentType } from '@core/values';
import { ApiEpisode } from '@models/api/api-episode.model';

@ImplementsStatic<Mapper<ApiEpisode, Episode>>()
export class EpisodeMapper {
  static map(api: ApiEpisode): Episode {
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

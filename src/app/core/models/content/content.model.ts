import { ContentType } from '@core/values';
import { Actor, Country, Director, Genre } from '@core/models';

export interface Content {
  id: number | string;
  contentType: ContentType;
  title: string;
  description: string;
  year: number;
  releaseDate: Date;
  ageLimit: number;
  poster: string;
  background: string;
  imdbRating: number;
  imdbVoteCount: number;
  kinopoiskRating: number;
  kinopoiskVoteCount: number;
  countries: Country[];
  genres: Genre[];
  actors: Actor[];
  directors: Director[];
}

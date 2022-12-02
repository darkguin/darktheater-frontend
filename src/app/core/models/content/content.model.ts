import { ContentType } from '@core/values';
import { Country } from '@models/content/country.model';
import { Director } from '@models/content/director.model';
import { Actor } from '@models/content/actor.model';
import { Genre } from '@models/content/genre.model';

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

import { MediaContentType } from '@core/values';

export interface Media {
  id: string;
  title: string;
  description: string;
  year: number;
  ageLimit: number;
  duration: number;
  imdbRating: number;
  imdbRatingVoteCount: number;
  kinopoiskRating: number;
  kinopoiskRatingVoteCount: number;
  releaseDate: string;
  countries: string[];
  actors: string[];
  directors: string[];
  genres: string[];
  background?: string;
  poster?: string;
  image?: string;
  preview?: string;
  hls?: string;
  contentType?: MediaContentType;
}

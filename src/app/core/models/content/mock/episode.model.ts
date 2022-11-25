import { ContentType } from '@core/values';

export interface Episode {
  id: string;
  title: string;
  contentType: ContentType;
  description: string;
  offset: number;
  releaseDate: string;
  ageLimit: number;
  duration: number;
  countries: string[];
  actors: any[];
  directors: any[];
  genres: string[];
  imdbRatingVoteCount?: number;
  kinopoiskRating?: number;
  kinopoiskRatingVoteCount?: number;
  background?: string;
  year?: number;
  number: number;
  preview?: string;
  imdbRating?: number;
  poster?: string;
  seriesName?: string;
  seasonName?: string;
  seasonIndex?: number;
  hls?: string;
}

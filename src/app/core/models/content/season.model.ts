import { Episode } from '@models/content/episode.model';
import { MediaContentType } from '@core/values';

export interface Season {
  id: string;
  title: string;
  contentType: MediaContentType;
  description: string;
  year?: any;
  imdbRating?: any;
  imdbRatingVoteCount?: any;
  kinopoiskRating?: any;
  kinopoiskRatingVoteCount?: any;
  releaseDate: string;
  ageLimit: number;
  duration: number;
  poster?: any;
  background?: any;
  number: number;
  image?: any;
  countries?: string[];
  actors?: any[];
  directors?: any[];
  genres: string[];
  episodes: Episode[];
  seriesName?: string;
}

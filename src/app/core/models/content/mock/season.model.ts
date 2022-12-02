import { EpisodeMock } from '@models/content/mock/episode.model';
import { ContentType } from '@core/values';

export interface SeasonMock {
  id: string;
  title: string;
  contentType: ContentType;
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
  episodes: EpisodeMock[];
  seriesName?: string;
}

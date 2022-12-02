import { ApiContent } from '@models/api/api-content.model';
import { ApiEpisode } from '@models/api/api-episode.model';

export interface ApiSeason extends ApiContent {
  episodes: ApiEpisode[];
}

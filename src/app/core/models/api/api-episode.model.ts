import { ApiContent } from '@models/api/api-content.model';

export interface ApiEpisode extends ApiContent {
  source: string;
  preview: string;
  duration: number;
  created_at: Date;
}

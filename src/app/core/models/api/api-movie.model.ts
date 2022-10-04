import { ApiContent } from '@models/api/api-content.model';

export interface ApiMovie extends ApiContent {
  source: string;
  preview: string;
  duration: number;
  created_at: Date;
}

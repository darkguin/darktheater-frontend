import { Content } from '@core/models';

export interface Episode extends Content {
  source: string;
  preview: string;
  duration: number;
  createdAt: Date;
}

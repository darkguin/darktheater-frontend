import { Content } from '@core/models';

export interface Movie extends Content {
  source: string;
  preview: string;
  duration: number;
  createdAt: Date;
}

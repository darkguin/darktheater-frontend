import { ContentType } from '@core/values';

export interface Card {
  contentId?: string;
  contentType: ContentType;
  title: string;
  image: string;
}

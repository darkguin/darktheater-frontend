import { ContentType } from '@core/values';

export interface Slide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  contentType: ContentType;
}

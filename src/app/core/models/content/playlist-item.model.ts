import { Movie, Serial } from '@core/models';
import { ContentType } from '@core/values';

export interface PlaylistItem {
  id: number;
  contentType: ContentType;
  content: Movie | Serial;
}

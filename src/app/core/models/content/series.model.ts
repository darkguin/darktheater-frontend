import { Media } from '@models/content/media.model';
import { Season } from '@models/content/season.model';

export interface Series extends Media {
  seasons?: Season[];
}

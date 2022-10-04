import { Media } from '@models/content/mock/media.model';
import { Season } from '@models/content/mock/season.model';

export interface Series extends Media {
  seasons?: Season[];
}

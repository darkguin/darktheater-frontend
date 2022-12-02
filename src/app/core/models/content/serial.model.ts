import { Content } from '@models/content/content.model';
import { Season } from '@models/content/season.model';

export interface Serial extends Content {
  seasons: Season[];
}

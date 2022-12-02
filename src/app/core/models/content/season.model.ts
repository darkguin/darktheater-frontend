import { Content } from '@models/content/content.model';
import { Episode } from '@models/content/episode.model';

export interface Season extends Content {
  episodes: Episode[];
}

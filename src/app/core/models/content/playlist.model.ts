import { PlaylistType } from '@core/values';
import { Movie, Serial } from '@core/models';

export interface Playlist {
  id: number;
  title: string;
  description: string;
  playlistType: PlaylistType;
  playlistItems: (Movie | Serial)[];
}

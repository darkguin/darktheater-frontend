import { PlaylistType } from '@core/values';
import { ApiSerial } from '@models/api/api-serial.model';
import { ApiMovie } from '@core/models';

export interface ApiPlaylist {
  id: number;
  title: string;
  description: string;
  playlist_type: PlaylistType;
  playlist_items: (ApiMovie | ApiSerial)[];
}

import { ApiMovie } from '@core/models';
import { ApiSerial } from '@models/api/api-serial.model';
import { ContentType } from '@core/values';

export interface ApiPlaylistItem {
  id: number;
  content_type: ContentType;
  content: ApiMovie | ApiSerial;
}

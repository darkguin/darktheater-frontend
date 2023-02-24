import { ImplementsStatic } from '@core/decorators/implements-static.decorator';
import { ApiMovie, ApiPlaylist, Mapper, Playlist } from '@core/models';
import { ContentType } from '@core/values';
import { MovieMapper } from '@core/mappers/movie.mapper';
import { SerialMapper } from '@core/mappers/serial.mapper';
import { ApiSerial } from '@models/api/api-serial.model';

@ImplementsStatic<Mapper<ApiPlaylist, Playlist>>()
export class PlaylistMapper {
  static map(api: ApiPlaylist): Playlist {
    return {
      id: api.id,
      title: api.title,
      description: api.description,
      playlistType: api.playlist_type,
      playlistItems: api.playlist_items.map((item) => {
        return item.content_type === ContentType.MOVIE
          ? MovieMapper.map(item as ApiMovie)
          : SerialMapper.map(item as ApiSerial);
      }),
    };
  }
}

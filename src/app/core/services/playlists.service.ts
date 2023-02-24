import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PlaylistsApi } from '@services/api/playlists.api';
import { Movie, Playlist, Serial } from '@core/models';
import { PlaylistMapper } from '@core/mappers/playlist.mapper';
import { generateMediaTag } from '@core/utils/generateMediaTag';
import { Slide } from '@shared/components/slider';
import { Card } from '@shared/components/card';
import { PageItem } from '@features/pages/home/types';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {
  constructor(private api: PlaylistsApi) {}

  getAll(page: number, limit: number): Observable<Playlist[]> {
    return this.api.getAll(page, limit).pipe(map((data) => data.map(PlaylistMapper.map)));
  }

  get(id: string | number): Observable<Playlist> {
    return this.api.getById(id).pipe(map(PlaylistMapper.map));
  }

  mapPlaylistsToItems(playlists: Playlist[]) {
    const mapPlaylistToSlides = (items: (Movie | Serial)[]) => {
      return (
        (items.map((content: Movie | Serial) => ({
          id: content.id || '',
          contentType: content.contentType,
          title: content.title,
          subtitle: generateMediaTag(content),
          image: content.background,
        })) as Slide[]) || []
      );
    };

    const mapPlaylistToCards = (items: (Movie | Serial)[]) => {
      return (
        (items.map((content: Movie | Serial) => ({
          contentId: content.id || '',
          contentType: content.contentType,
          title: content.title,
          image: content.poster,
        })) as Card[]) || []
      );
    };

    return playlists.map((playlist) => ({
      id: playlist.id || '',
      title: playlist.title,
      type: playlist.playlistType,
      items:
        playlist.playlistType === 'cards'
          ? mapPlaylistToCards(playlist.playlistItems)
          : mapPlaylistToSlides(playlist.playlistItems),
    })) as PageItem[];
  }
}

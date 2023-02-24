import { Injectable } from '@angular/core';
import { PlaylistsService } from '@services/playlists.service';
import { BehaviorSubject, concatMap, from, map, Observable, tap, toArray } from 'rxjs';
import { PageItem } from '@features/pages/home/types';

const PLAYLISTS_IDS = [1, 3, 5];

@Injectable({
  providedIn: 'root',
})
export class HomePageDataService {
  private data = new BehaviorSubject<PageItem[]>([]);

  constructor(private playlistService: PlaylistsService) {}

  get items$(): Observable<PageItem[]> {
    return this.data.asObservable();
  }

  get items(): PageItem[] {
    return this.data.getValue();
  }

  fetchPlaylist() {
    const makeRequest = (id: number) => {
      return this.playlistService.get(id);
    };

    return from(PLAYLISTS_IDS).pipe(
      concatMap((id) => makeRequest(id)),
      toArray(),
      map(this.playlistService.mapPlaylistsToItems),
      tap((data) => this.data.next(data)),
    );
  }
}

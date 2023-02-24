import { Component, OnInit } from '@angular/core';
import { MediaService } from '@services/content/media.service';
import { Movie } from '@core/models';
import { map, take } from 'rxjs';
import { PlaylistsService } from '@services/playlists.service';
import { PageItem } from '@features/pages/home/types';

const PLAYLIST_ID = 5;

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  playlists: PageItem[] = [];

  constructor(private mediaService: MediaService, private playlistService: PlaylistsService) {}

  get movie() {
    return this.mediaService.content as Movie;
  }

  ngOnInit() {
    this.playlistService
      .get(PLAYLIST_ID)
      .pipe(
        take(1),
        map((p) => this.playlistService.mapPlaylistsToItems([p])),
      )
      .subscribe((data: PageItem[]) => {
        this.playlists = data;
      });
  }
}

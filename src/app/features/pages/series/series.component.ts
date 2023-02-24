import { Component } from '@angular/core';
import { MediaService } from '@services/content/media.service';
import { Episode, Season, Serial } from '@core/models';
import { PageItem } from '@features/pages/home/types';
import { map, take } from 'rxjs';
import { PlaylistsService } from '@services/playlists.service';

const PLAYLIST_ID = 5;

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent {
  playlists: PageItem[] = [];
  selectedEpisode = 0;
  selectedSeason = 0;
  isLoading = false;
  currentEpisode: Episode = this.episodes[this.selectedEpisode];

  constructor(private mediaService: MediaService, private playlistService: PlaylistsService) {}

  get serial() {
    return this.mediaService.content as Serial;
  }

  get seasons(): Season[] {
    return this.serial?.seasons || [];
  }

  get episodes(): Episode[] {
    return this.serial?.seasons?.[this.selectedSeason].episodes || [];
  }

  get preview(): string {
    return this.currentEpisode?.preview || this.serial?.background || '';
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

  onSelectSeason(season: number) {
    this.selectedSeason = season;
    this.selectedEpisode = 0;
  }

  onSelectEpisode(episode: number) {
    this.selectedEpisode = episode;
    this.currentEpisode = this.episodes[this.selectedEpisode];
  }
}

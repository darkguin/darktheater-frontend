import { Component } from '@angular/core';
import { MediaService } from '@services/content/media.service';
import { Episode, Season, Serial } from '@core/models';
import { HomeRecommendationMock } from '@/app/mocks';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent {
  readonly recommendations = HomeRecommendationMock;
  selectedEpisode = 0;
  selectedSeason = 0;
  isLoading = false;
  currentEpisode: Episode = this.episodes[this.selectedEpisode];

  constructor(private mediaService: MediaService) {}

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

  onSelectSeason(season: number) {
    this.selectedSeason = season;
    this.selectedEpisode = 0;
  }

  onSelectEpisode(episode: number) {
    this.selectedEpisode = episode;
    this.currentEpisode = this.episodes[this.selectedEpisode];
  }
}

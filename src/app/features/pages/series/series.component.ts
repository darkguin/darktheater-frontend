import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from '@services/content/media.service';
import { Episode, Season, Series } from '@core/models';
import { NavigationFullPath, RoutePath } from '@core/values';
import { HomeRecommendationMock } from '@/app/mocks';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent {
  series!: Series;
  selectedSeason = 0;
  selectedEpisode = 0;

  readonly recommendations = HomeRecommendationMock;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mediaService: MediaService,
  ) {
    const mediaId = route.snapshot.paramMap.get('id') as string;
    const media = mediaService.getById(mediaId);

    if (!media) {
      router.navigate([NavigationFullPath[RoutePath.HOME]]);
      return;
    }

    this.series = media;
  }

  get seasons(): Season[] {
    return this.series.seasons || [];
  }

  get episodes(): Episode[] {
    return this.series.seasons?.[this.selectedSeason].episodes || [];
  }

  get currentEpisode(): Episode {
    return this.episodes[this.selectedEpisode];
  }

  get preview(): string {
    return this.currentEpisode?.preview || this.series?.background || '';
  }

  onSelectSeason(season: number) {
    this.selectedSeason = season;
  }

  onSelectEpisode(episode: number) {
    this.selectedEpisode = episode;
  }
}

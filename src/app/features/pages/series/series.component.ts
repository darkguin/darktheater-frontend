import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from '@features/pages/movies/services/media.service';
import { Media } from '@core/models';
import { NavigationFullPath, NavigationPath } from '@core/values';
import { HomeRecommendationMock } from '@/app/mocks';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent {
  media!: Media;

  readonly recommendations = HomeRecommendationMock;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mediaService: MediaService,
  ) {
    const mediaId = route.snapshot.paramMap.get('id') as string;
    const media = mediaService.getById(mediaId);

    if (!media) {
      router.navigate([NavigationFullPath[NavigationPath.HOME]]);
      return;
    }

    this.media = media;
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from '@services/content/media.service';
import { MovieMock } from '@core/models';
import { NavigationFullPath, RoutePath } from '@core/values';
import { HomeRecommendationMock } from '@/app/mocks';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  movie!: MovieMock;

  readonly recommendations = HomeRecommendationMock;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mediaService: MediaService,
  ) {
    const mediaId = route.snapshot.paramMap.get('id') as string;
    const movie = mediaService.getById(mediaId);

    if (!movie) {
      router.navigate([NavigationFullPath[RoutePath.HOME]]);
      return;
    }

    this.movie = movie;
  }
}

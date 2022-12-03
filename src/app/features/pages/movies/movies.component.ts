import { Component } from '@angular/core';
import { MediaService } from '@services/content/media.service';
import { Movie } from '@core/models';
import { HomeRecommendationMock } from '@/app/mocks';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  readonly recommendations = HomeRecommendationMock;

  constructor(private mediaService: MediaService) {}

  get movie() {
    return this.mediaService.content as Movie;
  }
}

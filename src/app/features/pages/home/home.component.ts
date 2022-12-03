import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { AccountService } from '@services/account.service';
import { User } from '@core/models';
import { isEmpty } from '@core/utils/object.util';
import { LoadingService } from '@core/services';
import { HomeNewMotionPicturesMock, HomeRecommendationMock, HomeSliderMock } from '@/app/mocks';
import { AuthService } from '@features/auth/services/auth.service';
import { Card } from '@shared/components/card';
import { MediaService } from '@services/content/media.service';
import { Router } from '@angular/router';
import { Slide } from '@shared/components/slider';
import { Meta, Title } from '@angular/platform-browser';
import { ContentType, MetaInfo, NavigationFullPath, RoutePath } from '@core/values';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  slides: Slide[] = HomeSliderMock;
  recommendations: Card[] = HomeRecommendationMock;
  newNotionPictures: Card[] = HomeNewMotionPicturesMock;
  private destroy = new Subject();

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title,
    private mediaService: MediaService,
    private accountService: AccountService,
    private authService: AuthService,
    private loadingService: LoadingService,
  ) {
    title.setTitle(MetaInfo.home.title());
    meta.addTags([{ name: 'description', content: MetaInfo.home.description() }]);
  }

  get currentUser$(): Observable<User> {
    return this.accountService.currentUser$;
  }

  ngOnInit() {
    this.loadingService.isLoading = true;
    this.fetchCurrentUser()
      .pipe(take(1))
      .subscribe(() => (this.loadingService.isLoading = false));
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }

  onSelectSlide(slide: Slide) {
    const contentUrl = this.createContentUrl(slide.id, slide.contentType);
    this.router.navigateByUrl(contentUrl);
  }

  getContentLink(content: any) {
    return this.createContentUrl(content.id, content.contentType);
  }

  private createContentUrl(id: number | string, contentType: ContentType) {
    return NavigationFullPath[
      contentType === ContentType.MOVIE ? RoutePath.MOVIES : RoutePath.SERIES
    ].replace(':id', id.toString());
  }

  private fetchCurrentUser(): Observable<User> {
    return isEmpty(this.accountService.currentUser) && this.authService.authorized
      ? this.accountService.getCurrentUser()
      : this.accountService.currentUser$;
  }
}

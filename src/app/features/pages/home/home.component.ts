import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextFieldType } from '@shared/components/text-field';
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

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly textFieldType = TextFieldType;
  slides: Slide[] = HomeSliderMock;
  recommendations: Card[] = HomeRecommendationMock;
  newNotionPictures: Card[] = HomeNewMotionPicturesMock;
  private destroy = new Subject();

  constructor(
    private router: Router,
    private mediaService: MediaService,
    private accountService: AccountService,
    private authService: AuthService,
    private loadingService: LoadingService,
  ) {}

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

  onClickCard(card: Card) {
    const media = this.mediaService.getById(card.contentId || '');
    if (!media) return;
    const contentUrl = this.mediaService.createContentUrl(media);
    this.router.navigate([contentUrl]);
  }

  onSelectSlide(slide: Slide) {
    console.log(slide);
    const media = this.mediaService.getById(slide.id || '');
    if (!media) return;
    const contentUrl = this.mediaService.createContentUrl(media);
    this.router.navigate([contentUrl]);
  }

  private fetchCurrentUser(): Observable<User> {
    return isEmpty(this.accountService.currentUser) && this.authService.authorized
      ? this.accountService.getCurrentUser()
      : this.accountService.currentUser$;
  }
}

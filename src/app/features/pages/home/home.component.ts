import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextFieldType } from '@shared/components/text-field';
import { Observable, Subject, take } from 'rxjs';
import { AccountService } from '@services/account.service';
import { User } from '@core/models';
import { isEmpty } from '@core/utils/object.util';
import { LoadingService } from '@core/services';
import { SliderItem } from '@shared/components/slider';
import { HomeSliderMock, HomeRecommendationMock, HomeNewMotionPicturesMock } from '@/app/mocks';
import { AuthService } from '@features/auth/services/auth.service';
import { Card } from '@shared/components/card';
import { MediaService } from '@services/content/media.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  readonly textFieldType = TextFieldType;

  slides: SliderItem[] = HomeSliderMock;
  recommendations: Card[] = HomeRecommendationMock;
  newNotionPictures: Card[] = HomeNewMotionPicturesMock;

  get currentUser$(): Observable<User> {
    return this.accountService.currentUser$;
  }

  constructor(
    private router: Router,
    private mediaService: MediaService,
    private accountService: AccountService,
    private authService: AuthService,
    private loadingService: LoadingService,
  ) {}

  ngOnInit() {
    this.loadingService.isLoading = true;
    this.fetchCurrentUser()
      .pipe(take(1))
      .subscribe(() => (this.loadingService.isLoading = false));
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }

  private fetchCurrentUser(): Observable<User> {
    return isEmpty(this.accountService.currentUser) && this.authService.authorized
      ? this.accountService.getCurrentUser()
      : this.accountService.currentUser$;
  }

  onClickWatch(card: Card) {
    const media = this.mediaService.getById(card.contentId || '');
    if (!media) return;
    const contentUrl = this.mediaService.createContentUrl(media);
    this.router.navigate([contentUrl]);
  }
}

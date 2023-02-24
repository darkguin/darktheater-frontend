import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { AccountService } from '@services/account.service';
import { User } from '@core/models';
import { isEmpty } from '@core/utils/object.util';
import { LoadingService } from '@core/services';
import { AuthService } from '@features/auth/services/auth.service';
import { MediaService } from '@services/content/media.service';
import { Router } from '@angular/router';
import { Slide } from '@shared/components/slider';
import { Meta, Title } from '@angular/platform-browser';
import { ContentType, MetaInfo, NavigationFullPath, PlaylistType, RoutePath } from '@core/values';
import { HomePageDataService } from '@features/pages/home/services/home-page-data.service';
import { PageItem } from '@features/pages/home/types';
import { Card } from '@shared/components/card';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  PlaylistType = PlaylistType;
  playlists: PageItem[] = [];
  private destroy = new Subject();

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title,
    private mediaService: MediaService,
    private accountService: AccountService,
    private loadingService: LoadingService,
    public authService: AuthService,
    public dataService: HomePageDataService,
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
      .subscribe(() => {
        if (!this.dataService.items.length) return;
        this.loadingService.isLoading = false;
      });

    const cachedData = this.dataService.items;
    if (cachedData.length) {
      this.playlists = cachedData;
      return;
    }

    this.dataService
      .fetchPlaylist()
      .pipe(take(1))
      .subscribe((data) => {
        this.playlists = data;
        this.loadingService.isLoading = false;
      });
  }

  trackBy(index: number, item: PageItem) {
    return item.title;
  }

  castSlides(items: Card[] | Slide[]) {
    return items as Slide[];
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }

  onSelectSlide(slide: Slide) {
    const contentUrl = this.createContentUrl(slide.id, slide.contentType);
    this.router.navigateByUrl(contentUrl);
  }

  onPromoBannerClick() {
    this.router.navigate([NavigationFullPath[RoutePath.SIGN_UP]]);
  }

  private createContentUrl(id: number | string, contentType: ContentType) {
    return NavigationFullPath[
      contentType === ContentType.MOVIE ? RoutePath.MOVIES : RoutePath.SERIES
    ].replace(':id', id?.toString());
  }

  private fetchCurrentUser(): Observable<User> {
    return isEmpty(this.accountService.currentUser) && this.authService.authorized
      ? this.accountService.getCurrentUser()
      : this.accountService.currentUser$;
  }
}

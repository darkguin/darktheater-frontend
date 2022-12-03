import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject, take } from 'rxjs';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ContentType, MetaInfo, NavigationFullPath, RoutePath } from '@core/values';
import { CatalogService } from '@features/pages/catalog/services/catalog.service';
import { Content } from '@core/models';
import { LoadingService } from '@core/services';

@Component({
  selector: 'catalog-page',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit, OnDestroy {
  public isAdditionalLoading = false;
  private destroy = new Subject();
  private page = 1;

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title,
    private catalogService: CatalogService,
    private loadingService: LoadingService,
  ) {
    title.setTitle(MetaInfo.catalog.title());
    meta.addTags([{ name: 'description', content: MetaInfo.catalog.description() }]);
  }

  get items() {
    return this.catalogService.items;
  }

  get isLoading$() {
    return this.loadingService.isLoading$;
  }

  ngOnInit() {
    this.loadingService.isLoading = true;
    this.catalogService.selectedContent = ContentType.MOVIE;
    this.updateCatalog('new');
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }

  onTabSelected(contentType: ContentType) {
    this.loadingService.isLoading = true;
    this.page = 1;
    this.catalogService.selectedContent = contentType;
    this.updateCatalog('new');
  }

  onScroll() {
    this.page++;
    this.isAdditionalLoading = true;
    this.updateCatalog('push', this.page);
  }

  onClickCard(card: Content) {
    const contentUrl = this.createContentUrl(card.id, card.contentType);
    this.router.navigateByUrl(contentUrl);
  }

  getContentLink(content: Content) {
    return this.createContentUrl(content.id, content.contentType);
  }

  private updateCatalog(action: 'new' | 'push', page = 1) {
    this.catalogService
      .loadItems(action, page)
      .pipe(debounceTime(200), take(1))
      .subscribe((items) => {
        if (!items.length) this.isAdditionalLoading = false;
        this.loadingService.isLoading = false;
      });
  }

  private createContentUrl(id: number | string, contentType: ContentType) {
    return NavigationFullPath[
      contentType === ContentType.MOVIE ? RoutePath.MOVIES : RoutePath.SERIES
    ].replace(':id', id.toString());
  }
}

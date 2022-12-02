import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, Subject, take } from 'rxjs';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ContentType, MetaInfo } from '@core/values';
import { CatalogService } from '@features/pages/catalog/services/catalog.service';
import { Content } from '@core/models';
import { LoadingService } from '@core/services';

@Component({
  selector: 'catalog-page',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnDestroy {
  private destroy = new Subject();

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

  get contentItems$() {
    return this.catalogService.contentItems$;
  }

  ngOnInit() {
    this.updateCatalog();
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }

  updateCatalog() {
    this.loadingService.isLoading = true;
    this.catalogService
      .updateContent(1)
      .pipe(debounceTime(200), take(1))
      .subscribe(() => {
        this.loadingService.isLoading = false;
      });
  }

  onTabSelected(contentType: ContentType) {
    this.loadingService.isLoading = true;
    this.catalogService.selectedContent = contentType;
    this.updateCatalog();
  }

  onClickCard(card: Content) {}
}

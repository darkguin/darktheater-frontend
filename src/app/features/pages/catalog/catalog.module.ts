import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CatalogComponent } from './catalog.component';

import { IconModule } from '@shared/components/icon';
import { PageWrapperModule } from '@shared/components/page-wrapper';
import { CardModule } from '@shared/components/card';
import { SliderModule } from '@shared/components/slider';
import { RemoveHostDirective } from '@shared/directives/remove-host';
import { CatalogSidebarComponent } from './components/catalog-sidebar/catalog-sidebar.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CatalogTabsComponent } from './components/catalog-tabs/catalog-tabs.component';
import { TextFieldModule } from '@shared/components/text-field';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardSkeletonComponent } from '@shared/components/skeleton';

@NgModule({
  declarations: [CatalogComponent, CatalogSidebarComponent, CatalogTabsComponent],
  imports: [
    CommonModule,
    IconModule,
    PageWrapperModule,
    CardModule,
    SliderModule,
    RemoveHostDirective,
    CatalogRoutingModule,
    ScrollingModule,
    TextFieldModule,
    InfiniteScrollModule,
    CardSkeletonComponent,
  ],
})
export default class CatalogModule {}

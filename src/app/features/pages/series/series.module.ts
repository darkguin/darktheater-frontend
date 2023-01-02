import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SeriesComponent } from './series.component';
import { SeriesRoutingModule } from './series-routing.module';

import { PageWrapperModule } from '@shared/components/page-wrapper';
import { PlayerComponent } from '@shared/components/player';
import { MediaTagComponent } from '@shared/components/media-tag/media-tag.component';
import { CardModule } from '@shared/components/card';
import { CardViewComponent } from '@shared/components/card-view';
import { ContentCoverComponent } from '@shared/components/content-cover/content-cover.component';
import { ScrollViewComponent } from '@shared/components/scroll-view';

@NgModule({
  declarations: [SeriesComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    PageWrapperModule,
    PlayerComponent,
    MediaTagComponent,
    CardModule,
    CardViewComponent,
    ContentCoverComponent,
    ScrollViewComponent,
  ],
})
export default class SeriesModule {}

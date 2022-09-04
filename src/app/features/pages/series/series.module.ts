import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SeriesComponent } from './series.component';
import { SeriesRoutingModule } from './series-routing.module';

import { PageWrapperModule } from '@shared/components/page-wrapper';
import { PlayerComponent } from '@shared/components/player';
import { MediaTagComponent } from '@shared/components/media-tag/media-tag.component';
import { CardComponent } from '@shared/components/card';
import { ScrollViewComponent } from '@shared/components/scroll-view';
import { ContentCoverComponent } from '@shared/components/content-cover/content-cover.component';

@NgModule({
  declarations: [SeriesComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    PageWrapperModule,
    PlayerComponent,
    MediaTagComponent,
    CardComponent,
    ScrollViewComponent,
    ContentCoverComponent,
  ],
})
export class SeriesModule {}

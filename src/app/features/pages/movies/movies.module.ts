import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { PageWrapperModule } from '@shared/components/page-wrapper';
import { PlayerComponent } from '@shared/components/player';
import { MediaTagComponent } from '@shared/components/media-tag/media-tag.component';
import { CardModule } from '@shared/components/card';
import { CardViewComponent } from '@shared/components/card-view';
import { ContentCoverComponent } from '@shared/components/content-cover/content-cover.component';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PageWrapperModule,
    PlayerComponent,
    MediaTagComponent,
    CardModule,
    CardViewComponent,
    ContentCoverComponent,
  ],
})
export default class MoviesModule {}

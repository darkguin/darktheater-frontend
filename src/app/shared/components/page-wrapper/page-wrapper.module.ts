import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageWrapperComponent } from './page-wrapper.component';
import { LoadingService } from '@core/services';
import { IconModule } from '@shared/components/icon';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@NgModule({
  declarations: [PageWrapperComponent],
  imports: [CommonModule, IconModule, LoaderComponent],
  providers: [LoadingService],
  exports: [PageWrapperComponent],
})
export class PageWrapperModule {}

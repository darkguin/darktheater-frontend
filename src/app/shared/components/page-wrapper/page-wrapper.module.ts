import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageWrapperComponent } from './page-wrapper.component';
import { LoaderModule } from '@shared/components/loader/loader.module';
import { LoadingService } from '@core/services';
import { IconModule } from '@shared/components/icon';

@NgModule({
  declarations: [PageWrapperComponent],
  imports: [CommonModule, LoaderModule, IconModule],
  providers: [LoadingService],
  exports: [PageWrapperComponent],
})
export class PageWrapperModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexSliderComponent } from './flex-slider.component';
import { FlexSlideComponent } from './components/flex-slide.component';
import { LazyImageDirective } from '@shared/directives/lazy-image';

@NgModule({
  declarations: [FlexSliderComponent, FlexSlideComponent],
  imports: [CommonModule, LazyImageDirective],
  exports: [FlexSliderComponent, FlexSlideComponent],
})
export class FlexSliderModule {}

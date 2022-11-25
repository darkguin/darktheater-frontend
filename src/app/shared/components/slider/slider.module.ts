import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SliderComponent } from './slider.component';
import { SlideComponent } from './components/slide.component';
import { LazyImageDirective } from '@shared/directives/lazy-image';
import { RemoveHostDirective } from '@shared/directives/remove-host';
import { IconModule } from '@shared/components/icon';

@NgModule({
  declarations: [SliderComponent, SlideComponent],
  imports: [CommonModule, LazyImageDirective, RemoveHostDirective, IconModule],
  exports: [SliderComponent, SlideComponent],
})
export class SliderModule {}

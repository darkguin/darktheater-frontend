import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SwiperModule, SwiperSlideDirective } from 'swiper/angular';
import { SliderComponent } from './slider.component';
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
  declarations: [SliderComponent, SlideComponent],
  imports: [CommonModule, SwiperModule],
  exports: [SliderComponent, SwiperSlideDirective, SlideComponent],
})
export class SliderModule {}

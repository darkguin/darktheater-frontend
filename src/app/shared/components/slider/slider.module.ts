import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SwiperModule, SwiperSlideDirective } from 'swiper/angular';
import SwiperCore, { Navigation, Pagination, Autoplay, Lazy } from 'swiper';

import { SliderComponent } from './slider.component';
import { SlideComponent } from './components/slide/slide.component';

SwiperCore.use([Autoplay, Navigation, Pagination, Lazy]);

@NgModule({
  declarations: [SliderComponent, SlideComponent],
  imports: [CommonModule, SwiperModule],
  exports: [SliderComponent, SwiperSlideDirective],
})
export class SliderModule {}

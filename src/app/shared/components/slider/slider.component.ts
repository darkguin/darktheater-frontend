import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Swiper, SwiperOptions } from 'swiper';
import { EventsParams } from 'swiper/angular';
import { SliderItem } from '@shared/components/slider/models/slider-item.model';

@Component({
  selector: 'slider, [slider]',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnDestroy {
  private autoplayInterval?: any;

  @Input() slides: SliderItem[] = [];
  @Input() delay = 5000;

  config: SwiperOptions = {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
  };

  ngOnDestroy() {
    clearInterval(this.autoplayInterval);
  }

  private runAutoplay(swiper: Swiper, delay: number) {
    this.autoplayInterval = setInterval(() => {
      swiper.slideNext();
    }, delay);
  }

  onSwiper(swiper: Swiper) {
    this.runAutoplay(swiper, this.delay);
  }

  onSlideChange(event: EventsParams['slideChange']) {
    console.log('slide change');
  }
}

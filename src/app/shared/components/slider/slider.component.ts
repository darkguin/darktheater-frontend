import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { Swiper, SwiperOptions } from 'swiper';
import { Slide } from './types/slide.type';

@Component({
  selector: 'slider, [slider]',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnDestroy {
  @Input() slides: Slide[] = [];
  @Output() clickSlide = new EventEmitter();
  instance!: Swiper;

  get config() {
    return {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      navigation: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: { clickable: true },
    } as SwiperOptions;
  }

  ngOnDestroy() {
    this.instance.destroy(true);
  }

  onSwiper(swiper: Swiper) {
    this.instance = swiper;
  }

  onSliderClick(slide: Slide) {
    this.clickSlide.emit(slide);
  }

  trackBy(index: number, slide: Slide): string {
    return slide.id;
  }
}

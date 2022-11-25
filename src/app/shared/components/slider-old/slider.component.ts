import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import SwiperCore, { Autoplay, Lazy, Navigation, Pagination, Swiper } from 'swiper';
import { SliderItem } from '@shared/components/slider-old/models/slider-item.model';

SwiperCore.use([Autoplay, Navigation, Pagination, Lazy]);

@Component({
  selector: 'slider-old, [slider-old]',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  private swiper?: Swiper;
  private autoplayInterval?: any;

  @Input() slides: SliderItem[] = [];
  @Input() delay = 5000;
  @Input() pagination = true;

  @ViewChild('slider_view', { read: ElementRef })
  sliderView!: ElementRef;

  @ViewChild('slider_container', { read: ElementRef })
  sliderContainer!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      const scrollView = this.sliderView.nativeElement as HTMLElement;
      const scrollContainer = this.sliderContainer.nativeElement as HTMLElement;

      if (!scrollView || !scrollContainer) return;

      this.addClassToSections(scrollContainer, 'swiper-slide');
      this.swiper = this.initSwiper(scrollView);
      this.runAutoplay(this.swiper, this.delay);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.autoplayInterval);
  }

  private initSwiper(scrollView: HTMLElement): Swiper {
    return new Swiper(scrollView, {
      lazy: true,
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      navigation: true,
      pagination: this.pagination ? { clickable: true, dynamicBullets: true } : false,
    });
  }

  private addClassToSections(scrollContainer: HTMLElement, styleClass: string) {
    if (!scrollContainer) return;

    scrollContainer.childNodes.forEach((section) => {
      if (section.nodeType === 1) {
        (section as HTMLElement).classList.add(styleClass);
        (section as HTMLElement).style.background = 'transparent';
      }
    });
  }

  onControlClick(action: 'prev' | 'next') {
    if (!this.swiper) return;
    action === 'prev' ? this.swiper.slidePrev() : this.swiper.slideNext();
  }

  private runAutoplay(swiper: Swiper, delay: number) {
    this.autoplayInterval = setInterval(() => {
      swiper.slideNext();
    }, delay);
  }
}

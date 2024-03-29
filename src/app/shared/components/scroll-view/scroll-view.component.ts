import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@shared/components/icon';

import { SwiperModule } from 'swiper/angular';
import { Swiper } from 'swiper';

@Component({
  selector: 'scroll-view, [scroll-view]',
  standalone: true,
  imports: [CommonModule, IconModule, SwiperModule],
  templateUrl: './scroll-view.component.html',
  styleUrls: ['./scroll-view.component.scss'],
})
export class ScrollViewComponent implements AfterViewInit {
  @ViewChild('scroll_view', { read: ElementRef })
  scrollView!: ElementRef;
  @ViewChild('scroll_container', { read: ElementRef })
  scrollContainer!: ElementRef;
  @Input() loop = false;
  private swiper?: Swiper;

  ngAfterViewInit() {
    setTimeout(() => {
      const scrollView = this.scrollView.nativeElement as HTMLElement;
      const scrollContainer = this.scrollContainer.nativeElement as HTMLElement;

      if (!scrollView || !scrollContainer) return;

      this.addClassToSections(scrollContainer, 'swiper-slide');
      this.swiper = this.initSwiper(scrollView);
    }, 1000);
  }

  onControlClick(action: 'prev' | 'next') {
    if (!this.swiper) return;

    action === 'prev' ? this.swiper.slidePrev() : this.swiper.slideNext();
  }

  private initSwiper(scrollView: HTMLElement): Swiper {
    return new Swiper(scrollView, {
      navigation: true,
      loop: this.loop,
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        1920: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
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
}

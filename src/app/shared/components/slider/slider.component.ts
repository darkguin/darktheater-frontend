import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Slide } from '@shared/components/slider/types/slide.type';
import { sliderAnimation } from '@shared/components/slider/animation/slider.animation';
import { Icon } from '@shared/components/icon';
import { RemoveHostDirective } from '@shared/directives/remove-host';

@Component({
  selector: 'slider, [slider]',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  hostDirectives: [RemoveHostDirective],
  animations: [sliderAnimation('sliderAnimation')],
})
export class SliderComponent implements OnInit, OnDestroy {
  readonly icon = Icon;
  @Input() delay: number = 4000;
  @Input() slides: Slide[] = [];
  @Output() clickSlide = new EventEmitter();
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  activeSlide: number = 0;

  timerId: unknown;

  ngOnInit() {
    this.timerId = setInterval(() => this.nextSlide(), this.delay);
  }

  ngOnDestroy() {
    clearInterval(this.timerId as number);
  }

  nextSlide(index = this.activeSlide + 1) {
    if (index >= this.slides.length) index = 0;
    this.activeSlide = index;
  }

  prevSlide(index = this.activeSlide - 1) {
    if (index < 0) index = this.slides.length - 1;
    this.activeSlide = index;
  }

  onSliderClick(slide: Slide) {
    this.clickSlide.emit(slide);
  }

  onSwipe(direction: 'left' | 'right') {
    console.log(direction);
    direction == 'left' ? this.prevSlide() : this.nextSlide();
  }

  trackBy(index: number, slide: Slide): string {
    return slide.image;
  }
}


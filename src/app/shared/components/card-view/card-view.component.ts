import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@shared/components/icon';

import { SwiperModule } from 'swiper/angular';
import { Swiper, SwiperOptions } from 'swiper';
import { Card, CardModule } from '@shared/components/card';
import { ContentType, NavigationFullPath, RoutePath } from '@core/values';

@Component({
  selector: 'card-view, [card-view]',
  standalone: true,
  imports: [CommonModule, IconModule, SwiperModule, CardModule],
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CardViewComponent implements OnDestroy {
  @Input() cards: Card[] = [];
  @Input() asContentLink = true;
  @Input() userListControls = false;
  @Output() clickCard = new EventEmitter<Card>();
  instance!: Swiper;

  get config() {
    return {
      navigation: true,
      spaceBetween: 20,
      slidesPerView: 'auto',
    } as SwiperOptions;
  }

  ngOnDestroy() {
    this.instance.destroy(true);
  }

  getContentLink(content: any) {
    return this.createContentUrl(content.id, content.contentType);
  }

  onSwiper(swiper: Swiper) {
    this.instance = swiper;
  }

  onCardClick(card: Card) {
    this.clickCard.emit(card);
  }

  trackBy(index: number, card: Card): string {
    return card.contentId || card.title;
  }

  private createContentUrl(id: number | string, contentType: ContentType) {
    return NavigationFullPath[
      contentType === ContentType.MOVIE ? RoutePath.MOVIES : RoutePath.SERIES
    ].replace(':id', id.toString());
  }
}

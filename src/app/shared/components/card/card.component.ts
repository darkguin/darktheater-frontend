import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon, IconModule } from '@shared/components/icon';
import { LazyImageDirective } from '@shared/directives/lazy-image';

@Component({
  selector: 'card, [card]',
  standalone: true,
  imports: [CommonModule, IconModule, LazyImageDirective],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = '';
  @Input() src = '';
  @Input() controls = true;

  @Output() clickWatch = new EventEmitter();
  @Output() clickCard = new EventEmitter();

  readonly icon = Icon;

  onClickWatchButton() {
    this.clickWatch.emit();
  }

  onCardClick() {
    this.clickCard.emit();
  }
}

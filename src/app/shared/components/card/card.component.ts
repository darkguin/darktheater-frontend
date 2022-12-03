import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icon } from '@shared/components/icon';

@Component({
  selector: 'card, [card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = '';
  @Input() src = '';
  @Input() controls = true;
  @Input() selected = false;
  @Input() width = '';

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

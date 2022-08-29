import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon, IconModule } from '@shared/components/icon';

@Component({
  selector: 'card, [card]',
  standalone: true,
  imports: [CommonModule, IconModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = '';
  @Input() src = '';

  readonly icon = Icon;
}

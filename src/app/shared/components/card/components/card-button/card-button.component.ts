import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-button, [card-button]',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss'],
})
export class CardButtonComponent {
  @Input() variant: 'contrast' | 'default' = 'default';
}

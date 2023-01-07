import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '@features/auth/services/auth.service';

@Component({
  selector: 'card, [card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = '';
  @Input() src = '';
  @Input() userListControls = false;
  @Input() controls = false;
  @Input() selected = false;
  @Input() width = '';

  @Output() clickCard = new EventEmitter();

  constructor(private authService: AuthService) {}

  get isAuthorized$() {
    return this.authService.authorized$;
  }

  onCardClick() {
    this.clickCard.emit();
  }
}

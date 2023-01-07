import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '@shared/components/icon';

@Component({
  selector: 'user-lists-controls',
  templateUrl: './user-lists-controls.component.html',
  styleUrls: ['./user-lists-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListsControlsComponent {
  readonly icon = Icon;

  onBtnClick(event: MouseEvent) {
    event.preventDefault();
  }
}

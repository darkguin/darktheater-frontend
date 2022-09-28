import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarSize } from '@shared/components/navigation-bar/values/navbar-size.enum';
import { Icon } from '@shared/components/icon';

@Component({
  selector: 'size-control',
  templateUrl: './size-control.component.html',
  styleUrls: ['./size-control.component.scss'],
})
export class SizeControlComponent {
  readonly navbarSizes = NavbarSize;
  readonly icons = Icon;

  @Input() navbarSize = NavbarSize.BIG;
  @Output() resize = new EventEmitter();

  onClickSizeControl(type: NavbarSize) {
    this.navbarSize = type;
    this.resize.emit(type);
  }
}

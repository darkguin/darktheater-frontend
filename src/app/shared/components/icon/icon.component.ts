import { Component, Input } from '@angular/core';
import { Icon } from '@shared/components/icon/values/icon.enum';

@Component({
  selector: 'icon, [icon]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() name = Icon.ADD;
}

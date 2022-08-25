import { Component, Input } from '@angular/core';
import { User } from '@core/models';
import { Icon } from '@shared/components/icon';
import { NavigationFullPath, NavigationPath } from '@core/values';

@Component({
  selector: 'home-sidebar, [home-sidebar]',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss'],
})
export class HomeSidebarComponent {
  @Input() user: User | null = null;
  icon = Icon;

  get profileRoute(): string {
    return NavigationFullPath[NavigationPath.PROFILE];
  }
}

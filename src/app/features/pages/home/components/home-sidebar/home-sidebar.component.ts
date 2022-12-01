import { Component, Input } from '@angular/core';
import { User } from '@core/models';
import { Icon } from '@shared/components/icon';
import { NavigationFullPath, RoutePath } from '@core/values';
import { RemoveHostDirective } from '@shared/directives/remove-host';

@Component({
  selector: 'home-sidebar, [home-sidebar]',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss'],
  hostDirectives: [RemoveHostDirective],
})
export class HomeSidebarComponent {
  @Input() user: User | null = null;
  icon = Icon;

  get profileRoute(): string {
    return NavigationFullPath[RoutePath.PROFILE];
  }
}

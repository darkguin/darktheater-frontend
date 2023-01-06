import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from '@shared/components/icon';
import { AppInfo, NavigationFullPath, RoutePath } from '@core/values';
import { NavBarService } from './services/nav-bar.service';
import { NavItem } from './models/nav-item.model';
import { NavbarSize } from './values/navbar-size.enum';
import { AuthService } from '@features/auth/services/auth.service';
import { NavAction } from '@shared/components/navigation-bar/values/nav-action.enum';

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  readonly appInfo = AppInfo;
  readonly icons = Icon;

  navbarSize = this.navBarService.navbarSize;
  isOpenBar = false;

  constructor(
    private navBarService: NavBarService,
    private authService: AuthService,
    private router: Router,
  ) {}

  get itemGroups() {
    return this.navBarService.itemGroups;
  }

  get authorized$() {
    return this.authService.authorized$;
  }

  get homePath() {
    return NavigationFullPath[RoutePath.HOME];
  }

  get isLargeBar() {
    return NavbarSize.BIG === this.navbarSize;
  }

  onResize(type: NavbarSize) {
    this.navbarSize = type;
    this.navBarService.navbarSize = type;
  }

  onClickVisibilityControl(isOpen = !this.isOpenBar) {
    this.isOpenBar = isOpen;
  }

  onClickItem(item: NavItem) {
    this.isOpenBar = false;

    switch (item.action) {
      case NavAction.ROUTING:
        this.router.navigate([item.routerPath || '/']);
        break;
    }
  }
}

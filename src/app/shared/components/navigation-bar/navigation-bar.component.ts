import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from '@shared/components/icon';
import { AppInfo, NavigationFullPath, NavigationPath } from '@core/values';
import { NavBarService } from './services/nav-bar.service';
import { NavItem } from './models/nav-item.model';
import { NavbarSize } from './values/navbar-size.enum';

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  readonly navbarSizes = NavbarSize;
  readonly appInfo = AppInfo;
  readonly icons = Icon;

  navbarSize = NavbarSize.BIG;
  isOpenBar = false;

  get itemGroups() {
    return this.navBarService.itemGroups;
  }

  get isAuthenticated() {
    return false;
  }

  get homePath() {
    return NavigationFullPath[NavigationPath.HOME];
  }

  get isLargeBar() {
    return this.navbarSizes.BIG === this.navbarSize;
  }

  constructor(private navBarService: NavBarService, private router: Router) {}

  onClickSizeControl(type: NavbarSize) {
    this.navbarSize = type;
  }

  onClickVisibilityControl(isOpen = !this.isOpenBar) {
    this.isOpenBar = isOpen;
  }

  onClickItem(item: NavItem) {
    this.isOpenBar = false;
    this.router.navigate([item.routerPath || '/']);
  }
}

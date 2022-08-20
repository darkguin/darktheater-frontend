import { Injectable } from '@angular/core';
import { NavItem } from '@shared/components/navigation-bar/models/nav-item.model';
import { NavItems } from '@shared/components/navigation-bar/values/nav-items.value';
import { NavCategories } from '@shared/components/navigation-bar/values/nav-categories.value';
import { LocalStorageService } from '@core/services';
import { StorageKey } from '@core/values';
import { NavbarSize } from '@shared/components/navigation-bar/values/navbar-size.enum';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  private readonly groups: Array<NavItem[]>;

  get itemGroups(): Array<NavItem[]> {
    return this.groups;
  }

  get navbarSize(): NavbarSize {
    const state = this.storage.getItem(StorageKey.NAVBAR_STATE);
    return (state as NavbarSize) || NavbarSize.BIG;
  }

  set navbarSize(value: NavbarSize) {
    this.storage.setItem(StorageKey.NAVBAR_STATE, value);
  }

  constructor(private storage: LocalStorageService) {
    this.groups = this.createGroups();
  }

  private createGroups() {
    const groups = [...Array(NavCategories.length)].map(() => [] as NavItem[]);

    NavItems.forEach((item: NavItem) => {
      groups[item.category.weight].push(item);
    });

    return groups.filter((group) => group.length > 0);
  }
}

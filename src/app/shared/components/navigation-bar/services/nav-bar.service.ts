import { Inject } from '@angular/core';
import { NavItem } from '@shared/components/navigation-bar/models/nav-item.model';
import { NavItems } from '@shared/components/navigation-bar/values/nav-items.value';
import { NavCategories } from '@shared/components/navigation-bar/values/nav-categories.value';

@Inject({
  providedIn: 'root',
})
export class NavBarService {
  private readonly groups: Array<NavItem[]>;

  get itemGroups(): Array<NavItem[]> {
    return this.groups;
  }

  constructor() {
    this.groups  = this.createGroups();
  }

  private createGroups() {
    const groups = [...Array(NavCategories.length)].map(() => [] as NavItem[]);

    NavItems.forEach((item: NavItem) => {
      groups[item.category.weight].push(item);
    });

    return groups.filter(group => group.length > 0);
  }
}


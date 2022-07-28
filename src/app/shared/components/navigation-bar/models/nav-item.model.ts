import { NavCategory } from './nav-category.model';
import { NavAction } from '../values/nav-action.enum';
import { Icon } from '@shared/components/icon';

export interface NavItem {
  title: string;
  action: NavAction,
  routerPath?: string;
  icon: Icon;
  category: NavCategory;
  auth?: boolean;
}

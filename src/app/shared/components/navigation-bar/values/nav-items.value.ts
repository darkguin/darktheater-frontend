import { NavigationFullPath, NavigationPath } from '@core/values';
import { NavItem } from '../models/nav-item.model';
import { NavCategories } from './nav-categories.value';
import { NavAction } from './nav-action.enum';
import { Icon } from '@shared/components/icon';

export const NavItems: NavItem[] = [
  {
    title: 'Home',
    action: NavAction.ROUTING,
    routerPath: NavigationFullPath[NavigationPath.HOME],
    category: NavCategories[0],
    icon: Icon.HOME,
    auth: false,
  } as NavItem,
  {
    title: 'Catalog',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[0],
    icon: Icon.SAFARI,
    auth: false,
  } as NavItem,
  {
    title: 'Recent',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[1],
    icon: Icon.TIME,
    auth: false,
  } as NavItem,
  {
    title: 'Top Rated',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[1],
    icon: Icon.STAR,
    auth: false,
  } as NavItem,
  {
    title: 'Watchlist',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[1],
    icon: Icon.ADD,
    auth: false,
  } as NavItem,
  {
    title: 'Completed',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[1],
    icon: Icon.CHECKED,
    auth: false,
  } as NavItem,
  {
    title: 'Settings',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[2],
    icon: Icon.SETTINGS,
    auth: false,
  } as NavItem,
  {
    title: 'Sign In',
    action: NavAction.ROUTING,
    routerPath: NavigationFullPath[NavigationPath.SIGN_IN],
    category: NavCategories[2],
    icon: Icon.EXIT,
    auth: false,
  } as NavItem,
  {
    title: 'Sign out',
    action: NavAction.SIGN_OUT,
    category: NavCategories[2],
    icon: Icon.EXIT,
    auth: true,
  } as NavItem,
];

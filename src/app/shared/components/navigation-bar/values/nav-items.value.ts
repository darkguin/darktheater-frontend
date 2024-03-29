import { NavigationFullPath, RoutePath } from '@core/values';
import { NavItem } from '../models/nav-item.model';
import { NavCategories } from './nav-categories.value';
import { NavAction } from './nav-action.enum';
import { Icon } from '@shared/components/icon';

export const NavItems: NavItem[] = [
  {
    title: 'Home',
    action: NavAction.ROUTING,
    routerPath: NavigationFullPath[RoutePath.HOME],
    category: NavCategories[0],
    icon: Icon.HOME,
    global: true,
    auth: false,
  } as NavItem,
  {
    title: 'Catalog',
    action: NavAction.ROUTING,
    routerPath: NavigationFullPath[RoutePath.CATALOG],
    category: NavCategories[0],
    icon: Icon.SAFARI,
    global: true,
    auth: false,
  } as NavItem,
  {
    title: 'Top Rated',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[1],
    icon: Icon.STAR,
    global: true,
    auth: false,
  } as NavItem,
  {
    title: 'Recent',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[1],
    icon: Icon.TIME,
    global: false,
    auth: true,
  } as NavItem,
  {
    title: 'Watchlist',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[1],
    icon: Icon.ADD,
    global: false,
    auth: true,
  } as NavItem,
  {
    title: 'Completed',
    action: NavAction.ROUTING,
    routerPath: '/',
    category: NavCategories[1],
    icon: Icon.CHECKED,
    global: false,
    auth: true,
  } as NavItem,
  {
    title: 'Profile',
    action: NavAction.ROUTING,
    routerPath: NavigationFullPath[RoutePath.PROFILE],
    category: NavCategories[2],
    icon: Icon.USER,
    global: false,
    auth: true,
  } as NavItem,
  // {
  //   title: 'Settings',
  //   action: NavAction.ROUTING,
  //   routerPath: '/',
  //   category: NavCategories[2],
  //   icon: Icon.SETTINGS,
  //   global: true,
  //   auth: false,
  // } as NavItem,
  {
    title: 'Sign In',
    action: NavAction.ROUTING,
    routerPath: NavigationFullPath[RoutePath.SIGN_IN],
    category: NavCategories[2],
    icon: Icon.EXIT,
    global: false,
    auth: false,
  } as NavItem,
];

import { RoutePath as Path } from './route-path.enum';
import { NavigationLayout as Layout } from './navigation-layout.enum';

const getPath = (layout: Layout) => (!!layout.length ? `/${layout}` : layout);

export const NavigationFullPath = {
  [Path.HOME]: `${getPath(Layout.MAIN)}/${Path.HOME}`,
  [Path.CATALOG]: `${getPath(Layout.MAIN)}/${Path.CATALOG}`,
  [Path.MOVIES]: `${getPath(Layout.MAIN)}/${Path.MOVIES}`,
  [Path.SERIES]: `${getPath(Layout.MAIN)}/${Path.SERIES}`,
  [Path.PROFILE]: `${getPath(Layout.MAIN)}/${Path.PROFILE}`,
  [Path.SIGN_IN]: `${getPath(Layout.AUTH)}/${Path.SIGN_IN}`,
  [Path.SIGN_UP]: `${getPath(Layout.AUTH)}/${Path.SIGN_UP}`,
  [Path.CONFIRM]: `${getPath(Layout.AUTH)}/${Path.CONFIRM}`,
  [Path.RESET_PASSWORD]: `${getPath(Layout.AUTH)}/${Path.RESET_PASSWORD}`,
};

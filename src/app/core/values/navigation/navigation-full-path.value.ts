import { NavigationPath } from './navigation-path.enum';
import { NavigationLayout } from './navigation-layout.enum';

const getPath = (layout: NavigationLayout) => (!!layout.length ? `/${layout}` : layout);

export const NavigationFullPath = {
  [NavigationPath.HOME]: `${getPath(NavigationLayout.MAIN)}/${NavigationPath.HOME}`,
  [NavigationPath.SIGN_IN]: `${getPath(NavigationLayout.AUTH)}/${NavigationPath.SIGN_IN}`,
  [NavigationPath.SIGN_UP]: `${getPath(NavigationLayout.AUTH)}/${NavigationPath.SIGN_UP}`,
  [NavigationPath.CONFIRM]: `${getPath(NavigationLayout.AUTH)}/${NavigationPath.CONFIRM}`,
  [NavigationPath.RESET_PASSWORD]: `${getPath(NavigationLayout.AUTH)}/${
    NavigationPath.RESET_PASSWORD
  }`,
};

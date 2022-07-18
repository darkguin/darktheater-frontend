import { NavigationPath } from './navigation-path.enum';
import { NavigationLayout } from './navigation-layout.enum';

export const NavigationFullPath = {
  [NavigationPath.HOME]: `${NavigationLayout.MAIN}/${NavigationPath.HOME}`,
  [NavigationPath.SIGN_IN]: `${NavigationLayout.AUTH}/${NavigationPath.SIGN_IN}`,
  [NavigationPath.SIGN_UP]: `${NavigationLayout.AUTH}/${NavigationPath.SIGN_UP}`,
  [NavigationPath.CONFIRM]: `${NavigationLayout.AUTH}/${NavigationPath.CONFIRM}`,
  [NavigationPath.RESET_PASSWORD]: `${NavigationLayout.AUTH}/${NavigationPath.RESET_PASSWORD}`,
}

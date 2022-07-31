import { ToastTypes } from './toast-types.enum';
import { Icon } from '@shared/components/icon';

export const ToastStyles = {
  [ToastTypes.SUCCESS]: {
    styleClass: 'toast--success',
    icon: Icon.CHECKED,
  },
  [ToastTypes.INFO]: {
    styleClass: 'toast--info',
    icon: Icon.FAQ,
  },
  [ToastTypes.ERROR]: {
    styleClass: 'toast--error',
    icon: Icon.FORBIDDEN,
  },
  [ToastTypes.WARNING]: {
    styleClass: 'toast--warning',
    icon: Icon.DANGER,
  },
};

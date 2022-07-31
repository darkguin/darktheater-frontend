import { DialogOptions } from './dialog-options.model';
import { ToastTypes } from '../values/toast-types.enum';
import { DialogPosition } from '@shared/components/dialog/values/dialog-position.enum';

export class ToastOptions extends DialogOptions {
  text = '';
  type = ToastTypes.INFO;

  constructor() {
    super();
    this.maxCount = 5;
    this.position = DialogPosition.BOTTOM_RIGHT;
  }
}

import { Injectable, Type } from '@angular/core';
import { DialogView } from '@shared/components/dialog/models/dialog-view.model';
import { DialogService } from '@shared/components/dialog/services/dialog.service';
import { ToastViewComponent } from '@shared/components/dialog/components/toast-view/toast-view.component';
import { ToastTypes } from '@shared/components/dialog/values/toast-types.enum';
import { ToastOptions } from '@shared/components/dialog/models/toast-options.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService extends DialogService {
  public show(componentClass: Type<DialogView>, options: ToastOptions): string {
    return super.showDialog(componentClass, options);
  }

  public info(text: string, delay = 5000, options = new ToastOptions()): string {
    options.type = ToastTypes.INFO;
    options.text = text;

    const dialogId = this.show(ToastViewComponent, options);
    this.close(dialogId, delay);
    return dialogId;
  }

  public success(text: string, delay = 5000, options = new ToastOptions()): string {
    options.type = ToastTypes.SUCCESS;
    options.text = text;

    const dialogId = this.show(ToastViewComponent, options);
    this.close(dialogId, delay);
    return dialogId;
  }

  public error(text: string, delay = 5000, options = new ToastOptions()): string {
    options.type = ToastTypes.ERROR;
    options.text = text;

    const dialogId = this.show(ToastViewComponent, options);
    this.close(dialogId, delay);
    return dialogId;
  }

  public warning(text: string, delay = 5000, options = new ToastOptions()): string {
    options.type = ToastTypes.WARNING;
    options.text = text;

    const dialogId = this.show(ToastViewComponent, options);
    this.close(dialogId, delay);
    return dialogId;
  }
}

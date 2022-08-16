import { ComponentRef, Injectable, Type } from '@angular/core';
import { DialogView } from '@shared/components/dialog/models/dialog-view.model';
import { Observable } from 'rxjs';
import { DialogService } from '@shared/components/dialog/services/dialog.service';
import { ModalOptions } from '@shared/components/dialog/models/modal-options.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService extends DialogService {
  dialogId = '';

  get componentRef(): ComponentRef<DialogView> | undefined {
    return this.getDialogRef(this.dialogId)?.componentRef;
  }

  get result$(): Observable<any> | undefined {
    return this.componentRef?.instance?.result$;
  }

  get buttonEvent$(): Observable<boolean> | undefined {
    return this.componentRef?.instance?.result$;
  }

  public show(componentClass: Type<DialogView>, options = new ModalOptions()): string {
    this.dialogId = super.showDialog(componentClass, options);
    return this.dialogId;
  }

  public override close(dialogId = this.dialogId) {
    super.close(this.dialogId);
    this.dialogId = '';
  }
}

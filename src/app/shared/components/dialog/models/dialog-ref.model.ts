import { DialogView } from '@shared/components/dialog/models/dialog-view.model';
import { ComponentRef } from '@angular/core';

export interface DialogRef {
  id: string;
  componentRef: ComponentRef<DialogView>;
}

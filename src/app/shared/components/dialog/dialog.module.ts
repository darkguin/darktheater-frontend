import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '@shared/components/icon';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { ModalService } from './services/modal.service';
import { ToastService } from './services/toast.service';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ToastViewComponent } from './components/toast-view/toast-view.component';
import { ModalViewComponent } from './components/modal-view/modal-view.component';
import { DialogContainerRef } from '@shared/components/dialog/directives/dialog-container-ref.directive';

@NgModule({
  declarations: [
    ToastContainerComponent,
    ModalContainerComponent,
    ToastViewComponent,
    ModalViewComponent,
    DialogContainerRef,
  ],
  imports: [CommonModule, IconModule],
  providers: [ModalService, ToastService],
  exports: [
    ToastContainerComponent,
    ModalContainerComponent,
    ToastViewComponent,
    ModalViewComponent,
  ],
})
export class DialogModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToastContainerComponent } from './components/toast-container/toast-container.component';
import { ModalService } from './services/modal.service';
import { ToastService } from './services/toast.service';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ToastViewComponent } from './components/toast-view/toast-view.component';
import { IconModule } from '@shared/components/icon';

@NgModule({
  declarations: [ToastContainerComponent, ModalContainerComponent, ToastViewComponent],
  imports: [CommonModule, IconModule],
  providers: [ModalService, ToastService],
  exports: [ToastContainerComponent, ModalContainerComponent, ToastViewComponent],
})
export class DialogModule {}

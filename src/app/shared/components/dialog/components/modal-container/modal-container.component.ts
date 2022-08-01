import { Component } from '@angular/core';
import { ModalService } from '@shared/components/dialog/services/modal.service';
import { DialogService } from '@shared/components/dialog/services/dialog.service';

@Component({
  selector: 'modal-container, [modal-container]',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
  providers: [
    {
      provide: DialogService,
      useExisting: ModalService,
    },
  ],
})
export class ModalContainerComponent {
  containerId = 'modal-container';

  get isModalShowing() {
    return !!this.modalService.dialogId;
  }

  constructor(private modalService: ModalService) {}

  onClickOutside(event: MouseEvent) {
    if ((event.target as HTMLElement).id === this.containerId) {
      this.modalService.close();
    }
  }
}

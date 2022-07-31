import { AfterViewInit, Component, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '@shared/components/dialog/services/modal.service';
import { DialogContainer } from '@shared/components/dialog/models/dialog-container.model';

@Component({
  selector: 'modal-container, [modal-container]',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
})
export class ModalContainerComponent extends DialogContainer implements OnDestroy, AfterViewInit {
  containerId = 'modal-container';

  @ViewChild('modal_container', { read: ViewContainerRef })
  dialogContainer!: ViewContainerRef;

  get isModalShowing() {
    return !!this.modalService.dialogId;
  }

  constructor(private modalService: ModalService) {
    super(modalService);
  }

  ngAfterViewInit() {
    this.modalService.setDialogContainerRef(this.dialogContainer);
  }

  ngOnDestroy = () => this.destroyContainer();

  onClickOutside(event: MouseEvent) {
    if ((event.target as HTMLElement).id === this.containerId) {
      this.modalService.close();
    }
  }
}

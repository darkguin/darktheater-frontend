import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Icon } from '@shared/components/icon';
import { DialogView } from '../../models/dialog-view.model';
import { ModalService } from '../../services/modal.service';
import { modalAnimation } from '../../animations/modal.animation';

@Component({
  selector: 'modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss'],
  animations: [modalAnimation()],
})
export class ModalViewComponent extends DialogView implements OnInit, OnDestroy {
  icons = Icon;
  title = 'THIS IS MODAL WINDOW';

  constructor(private modalService: ModalService) {
    super();
  }

  ngOnInit() {
    this.isVisible = true;
  }

  ngOnDestroy() {
    this.isVisible = false;
  }

  onClose() {
    this.buttonEvent.next(false);
    this.modalService.close();
  }

  onResult() {
    this.buttonEvent.next(true);
    this.result.next(true);
    this.modalService.close();
  }
}

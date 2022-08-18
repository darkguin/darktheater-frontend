import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { Icon } from '@shared/components/icon';
import { DialogView } from '../../models/dialog-view.model';
import { ModalService } from '../../services/modal.service';
import { modalAnimation } from '../../animations/modal.animation';
import { ModalOptions } from '../../models/modal-options.model';

@Component({
  selector: 'modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss'],
  animations: [modalAnimation()],
})
export class ModalViewComponent extends DialogView implements OnInit, OnDestroy {
  icons = Icon;

  get title(): string {
    return (this.options as ModalOptions).payload?.title || '';
  }

  get maxWidth(): string {
    return (this.options as ModalOptions).maxWidth || '85vw';
  }

  get withCloseButton(): boolean {
    return !!(this.options as ModalOptions).payload?.withCloseButton;
  }

  get closeText(): string {
    return (this.options as ModalOptions).payload?.closeText || 'Close';
  }

  get okText(): string {
    return (this.options as ModalOptions).payload?.okText || 'Ok';
  }

  get bodyViewRef(): TemplateRef<any> | null {
    return (this.options as ModalOptions).payload?.bodyViewRef || null;
  }

  get bodyText(): string {
    return (this.options as ModalOptions).payload?.bodyText || '';
  }

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

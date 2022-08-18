import { DialogOptions } from './dialog-options.model';
import { ModalPayload } from './modal-payload.model';

export class ModalOptions extends DialogOptions {
  payload: ModalPayload;
  maxWidth: string;

  constructor() {
    super();
    this.payload = {};
    this.maxWidth = '85vw';
  }
}

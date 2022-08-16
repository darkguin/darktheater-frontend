import { TemplateRef } from '@angular/core';

export interface ModalPayload {
  title?: string;
  withCloseButton?: boolean;
  closeText?: string;
  okText?: string;
  bodyViewRef?: TemplateRef<any> | null;
  bodyText?: string;
  [k: string]: any;
}

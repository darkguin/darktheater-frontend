import { Component, OnDestroy, OnInit } from '@angular/core';

import { DialogView } from '../../models/dialog-view.model';
import { ToastStyles } from '../../values/toast-styles.value';
import { ToastTypes } from '../../values/toast-types.enum';
import { toastAnimation } from '../../animations/toast.animation';
import { ToastOptions } from '@shared/components/dialog';

@Component({
  selector: 'toast-view',
  templateUrl: './toast-view.component.html',
  styleUrls: ['./toast-view.component.scss'],
  animations: [toastAnimation()],
})
export class ToastViewComponent extends DialogView implements OnInit, OnDestroy {
  toastStyle = ToastStyles[ToastTypes.INFO];

  get toastOptions(): ToastOptions {
    return this.options as ToastOptions;
  }

  get text() {
    return this.toastOptions.text || '';
  }

  ngOnInit() {
    const toastType = this.toastOptions?.type || ToastTypes.INFO;
    this.toastStyle = ToastStyles[toastType];
    this.isVisible = true;
  }

  ngOnDestroy() {
    this.isVisible = false;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Icon } from '@shared/components/icon';
import { ToastService } from '../../services/toast.service';
import { DialogView } from '../../models/dialog-view.model';
import { ToastStyles } from '../../values/toast-styles.value';
import { ToastTypes } from '../../values/toast-types.enum';
import { toastAnimation } from '../../animations/toast.animation';

@Component({
  selector: 'toast-view',
  templateUrl: './toast-view.component.html',
  styleUrls: ['./toast-view.component.scss'],
  animations: [toastAnimation()],
})
export class ToastViewComponent extends DialogView implements OnInit, OnDestroy {
  private destroy = new Subject();
  icons = Icon;
  toastStyle = ToastStyles[ToastTypes.INFO];

  get text$(): Observable<string> {
    return this.toastService.text$;
  }

  get toastType$(): Observable<ToastTypes> {
    return this.toastService.toastType$;
  }

  constructor(private toastService: ToastService) {
    super();
  }

  ngOnInit() {
    this.toastType$.pipe(takeUntil(this.destroy)).subscribe((type) => {
      this.toastStyle = ToastStyles[type];
    });
    this.isVisible = true;
  }

  ngOnDestroy() {
    this.isVisible = false;
    this.destroy.next(true);
  }
}

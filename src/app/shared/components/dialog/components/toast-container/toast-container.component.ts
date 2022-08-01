import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DialogPositionStyles } from '../../values/dialog-position-styles.value';
import { DialogPosition } from '@shared/components/dialog/values/dialog-position.enum';
import { ToastService } from '@shared/components/dialog/services/toast.service';
import { DialogService } from '@shared/components/dialog/services/dialog.service';

@Component({
  selector: 'toast-container, [toast-container]',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  providers: [
    {
      provide: DialogService,
      useExisting: ToastService,
    },
  ],
})
export class ToastContainerComponent implements OnDestroy {
  protected destroy = new Subject();

  positionStyle = DialogPositionStyles[DialogPosition.BOTTOM_RIGHT];

  constructor(private toastService: ToastService) {
    this.toastService.dialogOptions$.pipe(takeUntil(this.destroy)).subscribe((options) => {
      this.positionStyle = DialogPositionStyles[options.position];
    });
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }
}

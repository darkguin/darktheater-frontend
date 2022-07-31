import { AfterViewInit, Component, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DialogPositionStyles } from '../../values/dialog-position-styles.value';
import { DialogPosition } from '@shared/components/dialog/values/dialog-position.enum';
import { ToastService } from '@shared/components/dialog/services/toast.service';
import { DialogContainer } from '@shared/components/dialog/models/dialog-container.model';

@Component({
  selector: 'toast-container, [toast-container]',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent extends DialogContainer implements OnDestroy, AfterViewInit {
  positionStyle = DialogPositionStyles[DialogPosition.BOTTOM_RIGHT];

  @ViewChild('toast_container', { read: ViewContainerRef })
  dialogContainer!: ViewContainerRef;

  constructor(private toastService: ToastService) {
    super(toastService);

    this.toastService.dialogOptions$.pipe(takeUntil(this.destroy)).subscribe((options) => {
      this.positionStyle = DialogPositionStyles[options.position];
    });
  }

  ngAfterViewInit() {
    this.toastService.setDialogContainerRef(this.dialogContainer);
  }

  ngOnDestroy = () => this.destroyContainer();
}

import { AfterViewInit, Directive, OnDestroy, ViewContainerRef } from '@angular/core';
import { DialogService } from '@shared/components/dialog/services/dialog.service';

@Directive({
  selector: '[dialogContainerRef]',
})
export class DialogContainerRef implements AfterViewInit, OnDestroy {
  constructor(private dialogService: DialogService, private dialogContainer: ViewContainerRef) {}

  ngAfterViewInit() {
    this.dialogService.setDialogContainerRef(this.dialogContainer);
  }

  ngOnDestroy() {
    this.dialogService.setDialogContainerRef(undefined);
  }
}

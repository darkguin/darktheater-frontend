import { ComponentFactoryResolver, ComponentRef, Type, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as uuid from 'uuid';

import { Queue } from '@shared/data-structures/queue/queue';
import { DialogRef } from '@shared/components/dialog/models/dialog-ref.model';
import { DialogView } from '@shared/components/dialog/models/dialog-view.model';
import { DialogOptions } from '@shared/components/dialog/models/dialog-options.model';

export class DialogService {
  private dialogStack = new Queue<DialogRef>();

  private dialogOptions = new BehaviorSubject<DialogOptions>(new DialogOptions());

  private dialogContainerRef?: ViewContainerRef;

  // protected get dialogResult$(): Observable<any> {
  //   return this.componentRef?.instance?.result$;
  // }
  //
  // protected get dialogButtonEvent$(): Observable<boolean> {
  //   return this.componentRef?.instance?.buttonEvent$;
  // }

  get dialogOptions$(): Observable<DialogOptions> {
    return this.dialogOptions.asObservable();
  }

  constructor(private factoryResolver: ComponentFactoryResolver) {}

  private createDialogComponent(componentClass: Type<DialogView>): ComponentRef<DialogView> {
    const factory = this.factoryResolver.resolveComponentFactory(componentClass);
    return this.dialogContainerRef!.createComponent(factory);
  }

  private setDialogOptions(options: DialogOptions) {
    this.dialogOptions.next(options);
  }

  private setDialogRef(ref: DialogRef) {
    const maxRefCount = this.dialogOptions.value.maxCount || 1;

    if (this.dialogStack.size() >= maxRefCount) {
      this.dialogStack.peek()?.componentRef?.destroy();
      this.dialogStack.dequeue();
    }

    this.dialogStack.enqueue(ref);
  }

  protected getDialogRef(dialogId: string): DialogRef | undefined {
    return this.dialogStack.find((dialogRef) => dialogRef.id == dialogId);
  }

  protected showDialog(componentClass: Type<DialogView>, options: DialogOptions): string {
    const componentRef = this.createDialogComponent(componentClass);
    this.setDialogOptions(options);

    const dialogId = uuid.v4();
    this.setDialogRef({ id: dialogId, componentRef });
    return dialogId;
  }

  close(dialogId: string, delay = 0) {
    const dialogRef = this.getDialogRef(dialogId);
    const componentRef = dialogRef?.componentRef;

    setTimeout(() => componentRef?.destroy(), delay);
  }

  setDialogContainerRef(container?: ViewContainerRef) {
    this.dialogContainerRef = container;
  }
}

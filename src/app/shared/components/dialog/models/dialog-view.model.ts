import { Observable, Subject } from 'rxjs';
import { DialogOptions } from '@shared/components/dialog';

export abstract class DialogView {
  protected buttonEvent = new Subject<boolean>();

  protected result = new Subject<any>();

  options!: DialogOptions;

  isVisible = false;

  get buttonEvent$(): Observable<boolean> {
    return this.buttonEvent.asObservable();
  }

  get result$(): Observable<any> {
    return this.result.asObservable();
  }
}

import { Observable, Subject } from 'rxjs';

export abstract class DialogView {
  protected buttonEvent = new Subject<boolean>();

  protected result = new Subject<any>();

  isVisible = false;

  get buttonEvent$(): Observable<boolean> {
    return this.buttonEvent.asObservable();
  }

  get result$(): Observable<any> {
    return this.result.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loaderState = new BehaviorSubject<boolean>(false);

  get isLoading(): boolean {
    return this.loaderState.value;
  }

  set isLoading(value: boolean) {
    this.loaderState.next(value);
  }

  get isLoading$(): Observable<boolean> {
    return this.loaderState.asObservable();
  }
}

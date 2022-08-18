import { Injectable } from '@angular/core';
import { AuthApi } from '@services/index';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Credentials } from '@core/models';
import { TokenService } from '@features/auth/services/token.service';

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

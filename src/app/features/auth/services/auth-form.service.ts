import { Injectable } from '@angular/core';
import { AuthApi, ConfirmApi } from '@core/services';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { Credentials } from '@core/models';
import { TokenService } from '@features/auth/services/token.service';
import { UserMapper } from '@core/mappers/user.mapper';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthFormService {
  private formResetState = new Subject<boolean>();

  get formReset$(): Observable<boolean> {
    return this.formResetState.asObservable();
  }

  resetForm(value = true) {
    this.formResetState.next(value);
  }
}

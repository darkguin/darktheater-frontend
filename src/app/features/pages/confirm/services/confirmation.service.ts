import { Injectable } from '@angular/core';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';
import { ConfirmApi } from '@core/services';
import { map, Observable, of } from 'rxjs';
import { AccountApi } from '@services/api/account.api';

@Injectable()
export class ConfirmationService {
  constructor(private confirmApi: ConfirmApi, private accountApi: AccountApi) {}

  private confirmEmail(token: string) {
    return this.confirmApi.confirmEmail(token).pipe(map(() => ConfirmationType.EMAIL_VERIFICATION));
  }

  private confirmAccountDeletion(token: string) {
    return this.accountApi.delete(token).pipe(map(() => ConfirmationType.ACCOUNT_DELETION));
  }

  private confirmResetPassword(password: string, token: string) {
    return this.accountApi
      .changePassword(password, token)
      .pipe(map(() => ConfirmationType.PASSWORD_CHANGE));
  }

  confirmAction(
    type: ConfirmationType,
    token: string,
    payload?: string,
  ): Observable<ConfirmationType> {
    switch (type) {
      case ConfirmationType.EMAIL_VERIFICATION:
        return this.confirmEmail(token);
      case ConfirmationType.PASSWORD_CHANGE:
        return this.confirmResetPassword(payload || '', token);
      case ConfirmationType.ACCOUNT_DELETION:
        return this.confirmAccountDeletion(token);
    }
  }
}

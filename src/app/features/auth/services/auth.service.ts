import { Injectable } from '@angular/core';
import { AuthApi, ConfirmApi } from '@core/services';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Credentials } from '@core/models';
import { TokenService } from '@features/auth/services/token.service';
import { UserMapper } from '@core/mappers/user.mapper';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';
import { AccountService } from '@services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authorizationState = new BehaviorSubject<boolean>(!!this.tokenService.accessToken);

  get authorized(): boolean {
    return this.authorizationState.value;
  }

  get authorized$(): Observable<boolean> {
    return this.authorizationState.asObservable();
  }

  constructor(
    private authApi: AuthApi,
    private confirmApi: ConfirmApi,
    private tokenService: TokenService,
    private accountService: AccountService,
  ) {}

  signIn({ email, password }: Credentials): Observable<boolean> {
    return this.authApi.signIn({ username: email, password }).pipe(
      map(({ access_token, refresh_token, user }) => {
        const currentUser = UserMapper.map(user!);

        if (!currentUser.isActive) return false;

        this.tokenService.accessToken = access_token || '';
        this.tokenService.refreshToken = refresh_token || '';
        this.authorizationState.next(currentUser.isActive);
        this.accountService.updateCurrentUser(currentUser);
        return true;
      }),
    );
  }

  signUp({ email, username, password }: Credentials): Observable<boolean> {
    return this.authApi.signUp({ email, username, password }).pipe(map(() => true));
  }

  signOut() {
    this.tokenService.clear();
    this.authorizationState.next(false);
    this.accountService.updateCurrentUser(undefined);
    return of(true);
  }

  sendConfirmEmail(type: ConfirmationType, auth = false, email = ''): Observable<boolean> {
    return this.confirmApi.sendConfirmEmail(type, auth, email).pipe(map(() => true));
  }
}

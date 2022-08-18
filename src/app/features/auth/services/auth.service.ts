import { Injectable } from '@angular/core';
import { AuthApi, ConfirmApi } from '@core/services';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Credentials } from '@core/models';
import { TokenService } from '@features/auth/services/token.service';
import { UserMapper } from '@core/mappers/user.mapper';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';

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
  ) {}

  signIn({ email, password }: Credentials): Observable<boolean> {
    return this.authApi.signIn({ username: email, password }).pipe(
      map(({ access_token, user }) => {
        const { isActive } = UserMapper.map(user);

        if (!isActive) return false;

        this.tokenService.accessToken = access_token || '';
        this.authorizationState.next(isActive);
        return true;
      }),
    );
  }

  signUp({ email, username, password }: Credentials): Observable<boolean> {
    return this.authApi.signUp({ email, username, password }).pipe(map(() => true));
  }

  sendConfirmEmail(email: string, type: ConfirmationType): Observable<boolean> {
    return this.confirmApi.sendConfirmEmail(email, type).pipe(map(() => true));
  }
}

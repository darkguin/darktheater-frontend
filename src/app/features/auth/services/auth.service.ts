import { Injectable } from '@angular/core';
import { AuthApi } from '@core/services';
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

  constructor(private api: AuthApi, private tokenService: TokenService) {}

  signIn({ email, password }: Credentials): Observable<boolean> {
    return this.api.signIn({ username: email, password }).pipe(
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
    return this.api.signUp({ email, username, password }).pipe(map(() => true));
  }

  sendConfirmEmail(email: string, type: ConfirmationType): Observable<boolean> {
    return this.api.sendConfirmEmail(email, type).pipe(
      tap((data: any) => {
        console.log('resp: ', data);
      }),
    );
  }
}

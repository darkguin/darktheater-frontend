import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { User } from '@core/models';
import { AccountApi } from '@services/api/account.api';
import { UserMapper } from '@core/mappers/user.mapper';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountState = new BehaviorSubject<User | undefined>(undefined);

  get currentUser$(): Observable<User> {
    return this.accountState.asObservable() as Observable<User>;
  }

  get currentUser(): User | undefined {
    return this.accountState.value;
  }

  constructor(private api: AccountApi) {}

  getCurrentUser(): Observable<User> {
    return this.api.get().pipe(
      map(UserMapper.map),
      tap((user: User) => {
        this.accountState.next(user);
      }),
    );
  }

  updateCurrentUser(user?: User) {
    this.accountState.next(user);
  }
}

import { Injectable } from '@angular/core';
import { StorageKey } from '@core/values';
import { LocalStorageService } from '@core/services';
import { TokenApi } from '@services/api/token.api';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public get accessToken(): string {
    return this.storage.getItem(StorageKey.ACCESS_TOKEN) as string;
  }

  public get refreshToken(): string {
    return this.storage.getItem(StorageKey.REFRESH_TOKEN) as string;
  }

  public set accessToken(token: string) {
    this.storage.setItem(StorageKey.ACCESS_TOKEN, token);
  }

  public set refreshToken(token: string) {
    this.storage.setItem(StorageKey.REFRESH_TOKEN, token);
  }

  constructor(private storage: LocalStorageService, private tokenApi: TokenApi) {}

  public clear() {
    this.storage.removeItem(StorageKey.ACCESS_TOKEN);
    this.storage.removeItem(StorageKey.REFRESH_TOKEN);
  }

  public refresh(accessToken: string): Observable<any> {
    return this.tokenApi.refresh(accessToken).pipe(
      tap(({ access_token, refresh_token }) => {
        this.accessToken = access_token || '';
        this.refreshToken = refresh_token || '';
      }),
    );
  }
}

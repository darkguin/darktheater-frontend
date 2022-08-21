import { Injectable } from '@angular/core';
import { StorageKey } from '@core/values';
import { LocalStorageService } from '@core/services';
import { TokenApi } from '@services/api/token.api';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public get accessToken(): string {
    return this.storage.getItem(StorageKey.ACCESS_TOKEN) as string;
  }

  public set accessToken(token: string) {
    this.storage.setItem(StorageKey.ACCESS_TOKEN, token);
  }

  constructor(private storage: LocalStorageService, private tokenApi: TokenApi) {}

  public clear() {
    this.storage.removeItem(StorageKey.ACCESS_TOKEN);
  }

  public refresh(accessToken: string): Observable<string> {
    return this.tokenApi.refresh(accessToken).pipe(
      map(({ access_token }) => access_token || ''),
      tap((token) => {
        this.accessToken = token;
      }),
    );
  }
}

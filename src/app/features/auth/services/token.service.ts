import { Injectable } from '@angular/core';
import { StorageKey } from '@core/values';
import { LocalStorageService } from '@core/services';

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

  constructor(private storage: LocalStorageService) {}

  public clear() {
    this.storage.removeItem(StorageKey.ACCESS_TOKEN);
  }
}

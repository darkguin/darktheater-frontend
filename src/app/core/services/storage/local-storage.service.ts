import { Injectable } from '@angular/core';
import { StorageInterface } from '@models/storage/storage.interface';
import { StorageKey } from '@core/values';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements StorageInterface {
  public length(): number {
    return localStorage.length;
  }

  public clear() {
    localStorage.clear();
  }

  public getItem(key: StorageKey): unknown {
    try {
      return JSON.parse(localStorage.getItem(key) || '');
    } catch {
      return null;
    }
  }

  public removeItem(key: StorageKey) {
    localStorage.removeItem(key);
  }

  public setItem(key: StorageKey, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

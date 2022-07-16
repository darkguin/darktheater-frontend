import { StorageKey } from '@core/values';

export interface StorageInterface {
  length(): number;
  clear(): void;
  getItem(key: StorageKey): unknown;
  removeItem(key: StorageKey): void;
  setItem(key: StorageKey, value: unknown): void;
}

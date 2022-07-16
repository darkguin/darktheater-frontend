import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '@core/services';
import { NavigationPath, StorageKey } from '@core/values';

@Injectable({
  providedIn: 'root',
})
export class GlobalGuard implements CanActivate {
  constructor(private storageService: LocalStorageService, private router: Router) {}

  canActivate() {
    if (this.storageService.getItem(StorageKey.ACCESS_TOKEN)) {
      return true;
    }

    this.router.navigate([`/${NavigationPath.SIGN_IN}`]);
    return false;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '@core/services';
import { NavigationFullPath, NavigationPath, StorageKey } from '@core/values';

@Injectable({
  providedIn: 'root',
})
export class CommonGuard implements CanActivate {
  constructor(private storageService: LocalStorageService, private router: Router) {}

  canActivate() {
    if (!this.storageService.getItem(StorageKey.ACCESS_TOKEN)) {
      return true;
    }

    this.router.navigate([NavigationFullPath[NavigationPath.HOME]]);
    return false;
  }
}

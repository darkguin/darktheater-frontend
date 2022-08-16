import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';
import { NavigationFullPath, NavigationPath } from '@core/values';

@Injectable()
export class ConfirmGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const confirmationType = route.queryParamMap.get('type') as ConfirmationType;

    switch (confirmationType) {
      case ConfirmationType.EMAIL_VERIFICATION:
        break;
      case ConfirmationType.PASSWORD_CHANGE:
        break;
      case ConfirmationType.ACCOUNT_DELETION:
        break;
      default: {
        this.router.navigate([NavigationFullPath[NavigationPath.SIGN_IN]]);
        return false;
      }
    }

    return true;
  }
}

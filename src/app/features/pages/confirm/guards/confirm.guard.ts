import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';
import { NavigationFullPath, RoutePath } from '@core/values';

@Injectable()
export class ConfirmGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const confirmationTypes = [
      ConfirmationType.EMAIL_VERIFICATION,
      ConfirmationType.PASSWORD_CHANGE,
      ConfirmationType.ACCOUNT_DELETION,
    ];

    const confirmationType = route.queryParamMap.get('type') as ConfirmationType;
    const token = route.queryParamMap.get('token') || '';

    const isValidConfirmationType = confirmationTypes.includes(confirmationType);

    if (!isValidConfirmationType || !token) {
      this.navigateToSignIn();
      return false;
    }

    return true;
  }

  private navigateToSignIn() {
    const signInPath = NavigationFullPath[RoutePath.SIGN_IN];
    this.router.navigate([signInPath]);
  }
}

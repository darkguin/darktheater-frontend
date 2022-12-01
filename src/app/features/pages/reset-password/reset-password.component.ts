import { Component } from '@angular/core';
import { NavigationFullPath, RoutePath } from '@core/values';
import { Router } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';
import { ToastService } from '@shared/components/dialog';
import { LoadingService } from '@core/services';
import { catchError, take, throwError } from 'rxjs';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';
import { ApiError, Credentials } from '@core/models';
import { AuthFormType } from '@features/auth/values/auth-form-type.enum';
import { AuthFormService } from '@features/auth/services/auth-form.service';

@Component({
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  authFormType = AuthFormType;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private authFormService: AuthFormService,
  ) {}

  get signUpPath() {
    return NavigationFullPath[RoutePath.SIGN_UP];
  }

  get signInPath() {
    return NavigationFullPath[RoutePath.SIGN_IN];
  }

  onSubmit({ email }: Credentials) {
    this.loadingService.isLoading = true;

    this.authService
      .sendConfirmEmail(ConfirmationType.PASSWORD_CHANGE, false, email)
      .pipe(
        take(1),
        catchError(({ error_code }: ApiError) => {
          this.loadingService.isLoading = false;
          this.toastService.error('The account with this email was not found', 8000);
          return throwError(error_code);
        }),
      )
      .subscribe(() => {
        this.authFormService.resetForm();
        this.loadingService.isLoading = false;

        this.toastService.success('An email to restore access to the account has been sent.', 8000);
        this.router.navigate([NavigationFullPath[RoutePath.SIGN_IN]]);
      });
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationFullPath, NavigationPath } from '@core/values';
import { Router } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';
import { ToastService } from '@shared/components/dialog';
import { LoadingService } from '@core/services';
import { ValidationUtil } from '@features/auth/utils/validation.util';
import { catchError, Observable, take, throwError } from 'rxjs';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';
import { ApiError } from '@core/models';

@Component({
  selector: 'reset-password-page',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  get signUpPath() {
    return NavigationFullPath[NavigationPath.SIGN_UP];
  }

  get signInPath() {
    return NavigationFullPath[NavigationPath.SIGN_IN];
  }

  get isLoading$(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }

  get isInvalidForm() {
    return !this.authForm.dirty || this.authForm.invalid;
  }

  get emailControl() {
    return this.authForm.controls.email;
  }

  get emailError(): string {
    if (!(this.emailControl.invalid && this.emailControl.dirty)) return '';

    return this.emailControl.errors?.['email']?.message;
  }

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, ValidationUtil.email]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    private loadingService: LoadingService,
  ) {}

  onSubmit(event: SubmitEvent) {
    this.loadingService.isLoading = true;
    event.preventDefault();

    if (this.isInvalidForm) return;

    const email = this.emailControl.value || '';

    this.authService
      .sendConfirmEmail(email, ConfirmationType.PASSWORD_CHANGE)
      .pipe(
        take(1),
        catchError(({ error_code }: ApiError) => {
          this.loadingService.isLoading = false;
          this.toastService.error('The account with this email was not found', 8000);
          return throwError(error_code);
        }),
      )
      .subscribe(() => {
        this.authForm.reset();
        this.loadingService.isLoading = false;

        this.toastService.success('An email to restore access to the account has been sent.', 8000);
        this.router.navigate([NavigationFullPath[NavigationPath.SIGN_IN]]);
      });
  }
}

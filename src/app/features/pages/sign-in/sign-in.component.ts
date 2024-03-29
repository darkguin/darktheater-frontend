import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NavigationFullPath, RoutePath } from '@core/values';
import { ModalOptions } from '@shared/components/dialog/models/modal-options.model';
import { Router } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';
import { ModalService } from '@shared/components/dialog';
import { LoadingService } from '@core/services';
import { ApiError, Credentials } from '@core/models';
import { catchError, map, Observable, take, throwError } from 'rxjs';
import { ApiErrorCodes } from '@values/api/api-error-codes.enum';
import { ModalViewComponent } from '@shared/components/dialog/components/modal-view/modal-view.component';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';
import { AuthFormType } from '@features/auth/values/auth-form-type.enum';
import { AuthFormService } from '@features/auth/services/auth-form.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  authFormType = AuthFormType;
  credentials: Credentials = {};

  @ViewChild('errorModal')
  public errorModalRef!: TemplateRef<any>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: ModalService,
    private loadingService: LoadingService,
    private authFormService: AuthFormService,
  ) {}

  get forgotPasswordPath() {
    return NavigationFullPath[RoutePath.RESET_PASSWORD];
  }

  get signUpPath() {
    return NavigationFullPath[RoutePath.SIGN_UP];
  }

  onSubmit(credentials: Credentials) {
    this.credentials = credentials;
    this.loadingService.isLoading = true;

    const modalOptions = this.initModalOptions();

    this.authService
      .signIn(credentials)
      .pipe(
        take(1),
        catchError((err) => {
          const email = credentials.email || '';
          this.handleInvalidSignIn(err, email, modalOptions);
          return throwError(err);
        }),
      )
      .subscribe((_: boolean) => {
        this.authFormService.resetForm();
        this.loadingService.isLoading = false;
        this.navigateTo(RoutePath.HOME);
      });
  }

  private resendConfirmationEmail(email: string): Observable<boolean> {
    return this.authService
      .sendConfirmEmail(ConfirmationType.EMAIL_VERIFICATION, false, email)
      .pipe(
        take(1),
        map((data) => !!data),
      );
  }

  private handleInvalidSignIn({ error_code }: ApiError, email: string, modalOptions: ModalOptions) {
    if (error_code === ApiErrorCodes.USER_INACTIVE) {
      this.resendConfirmationEmail(email).subscribe(() => {
        this.modalService.show(ModalViewComponent, modalOptions);
      });
    }

    this.loadingService.isLoading = false;
  }

  private initModalOptions(): ModalOptions {
    const options = new ModalOptions();
    options.maxWidth = '600px';
    options.payload.bodyViewRef = this.errorModalRef;
    return options;
  }

  private navigateTo(path: RoutePath) {
    this.router.navigate([NavigationFullPath[path]]);
  }
}

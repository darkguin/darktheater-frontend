import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TextFieldType } from '@shared/components/text-field/values/text-field-type.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationFullPath, NavigationPath } from '@core/values';
import { ValidationUtil } from '@features/auth/utils/validation.util';
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

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  textFieldType = TextFieldType;

  @ViewChild('errorModal')
  public errorModalRef!: TemplateRef<any>;

  get forgotPasswordPath() {
    return NavigationFullPath[NavigationPath.RESET_PASSWORD];
  }

  get signUpPath() {
    return NavigationFullPath[NavigationPath.SIGN_UP];
  }

  get isInvalidForm() {
    return !this.authForm.dirty || this.authForm.invalid;
  }

  get isLoading$(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }

  get emailControl() {
    return this.authForm.controls.email;
  }

  get passwordControl() {
    return this.authForm.controls.password;
  }

  get emailError(): string {
    if (!(this.emailControl.invalid && this.emailControl.dirty)) return '';

    return this.emailControl.errors?.['email']?.message;
  }

  get passwordError(): string {
    if (!(this.passwordControl.invalid && this.passwordControl.dirty)) return '';

    return (
      this.passwordControl.errors?.['numberContains']?.message ||
      this.passwordControl.errors?.['upperCaseLetterContains']?.message ||
      this.passwordControl.errors?.['lowerCaseLetterContains']?.message
    );
  }

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, ValidationUtil.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      ValidationUtil.numberContains,
      ValidationUtil.upperCaseLetterContains,
      ValidationUtil.lowerCaseLetterContains,
    ]),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: ModalService,
    private loadingService: LoadingService,
  ) {}

  private resendConfirmationEmail(email: string): Observable<boolean> {
    return this.authService.sendConfirmEmail(email, ConfirmationType.EMAIL_VERIFICATION).pipe(
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

  onSubmit(event: SubmitEvent) {
    this.loadingService.isLoading = true;
    event.preventDefault();

    if (this.isInvalidForm) return;

    const credentials = this.authForm.value as Credentials;
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
        this.authForm.reset();
        this.loadingService.isLoading = false;
        this.router.navigate([NavigationFullPath[NavigationPath.HOME]]);
      });
  }
}

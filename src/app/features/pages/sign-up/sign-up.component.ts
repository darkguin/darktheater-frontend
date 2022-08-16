import { Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TextFieldType } from '@shared/components/text-field/values/text-field-type.enum';
import { NavigationFullPath, NavigationPath } from '@core/values';
import { AuthService } from '@features/auth/services/auth.service';
import { Credentials } from '@core/models';
import { catchError, Observable, Subject, take, takeUntil, throwError } from 'rxjs';
import { LoadingService } from '@core/services';
import { ValidationUtil } from '@features/auth/utils/validation.util';
import { ModalOptions } from '@shared/components/dialog/models/modal-options.model';
import { ModalService } from '@shared/components/dialog';
import { ModalViewComponent } from '@shared/components/dialog/components/modal-view/modal-view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnDestroy {
  private destroy = new Subject();
  textFieldType = TextFieldType;

  @ViewChild('successModal')
  public successModalRef!: TemplateRef<any>;

  get forgotPasswordPath() {
    return NavigationFullPath[NavigationPath.RESET_PASSWORD];
  }

  get signInPath() {
    return NavigationFullPath[NavigationPath.SIGN_IN];
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
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
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

  ngOnDestroy() {
    this.destroy.next(true);
  }

  initModalOptions(): ModalOptions {
    const options = new ModalOptions();
    options.maxWidth = '600px';
    options.payload.bodyViewRef = this.successModalRef;
    return options;
  }

  onCloseModal() {
    this.router.navigate([this.signInPath]);
  }

  onSubmit(event: SubmitEvent) {
    this.loadingService.isLoading = true;
    event.preventDefault();

    if (this.isInvalidForm) return;

    const credentials = this.authForm.value as Credentials;
    const modalOptions = this.initModalOptions();

    this.authService
      .signUp(credentials)
      .pipe(
        takeUntil(this.destroy),
        catchError((err) => {
          this.loadingService.isLoading = false;
          return throwError(err);
        }),
      )
      .subscribe((_: boolean) => {
        this.authForm.reset();
        this.loadingService.isLoading = false;

        this.modalService.show(ModalViewComponent, modalOptions);
        this.modalService.buttonEvent$?.pipe(take(1)).subscribe(() => this.onCloseModal());
      });
  }
}

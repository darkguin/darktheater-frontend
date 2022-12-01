import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TextFieldType } from '@shared/components/text-field/values/text-field-type.enum';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationUtil } from '@features/auth/utils/validation.util';
import { LoadingService } from '@core/services';
import { Credentials } from '@core/models';
import { AuthFormType } from '@features/auth/values/auth-form-type.enum';
import { NavigationFullPath, RoutePath } from '@core/values';
import { AuthFormService } from '@features/auth/services/auth-form.service';
import { AuthFormConfig } from '@features/auth/values/auth-form-config.value';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit, OnDestroy {
  @Input() type = AuthFormType.SIGN_IN;
  @Output() submitted = new EventEmitter<Credentials>();
  authFormType = AuthFormType;
  textFieldType = TextFieldType;
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
  private destroy = new Subject();

  constructor(private loadingService: LoadingService, private authFormService: AuthFormService) {}

  get forgotPasswordPath() {
    return NavigationFullPath[RoutePath.RESET_PASSWORD];
  }

  get formConfig() {
    return AuthFormConfig[this.type];
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

  get usernameControl() {
    return this.authForm.controls.username;
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

  ngOnInit() {
    this.disableUnusedControls();

    this.authFormService.formReset$
      .pipe(takeUntil(this.destroy))
      .subscribe(() => this.authForm.reset());
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }

  onSubmit() {
    if (this.isInvalidForm) return;
    this.submitted.emit(this.authForm.value as Credentials);
  }

  private disableUnusedControls() {
    if (!this.formConfig.usernameControl) this.usernameControl.clearValidators();
    if (!this.formConfig.emailControl) this.emailControl.clearValidators();
    if (!this.formConfig.passwordControl) this.passwordControl.clearValidators();
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationUtil } from '@features/auth/utils/validation.util';
import { TextFieldType } from '@shared/components/text-field/values/text-field-type.enum';
import { NavigationFullPath, NavigationPath } from '@core/values';
import { Observable } from 'rxjs';
import { LoadingService } from '@core/services';

@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent {
  @Output() submitted = new EventEmitter<string>();

  textFieldType = TextFieldType;

  get isLoading$(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }

  get signUpPath() {
    return NavigationFullPath[NavigationPath.SIGN_UP];
  }

  get signInPath() {
    return NavigationFullPath[NavigationPath.SIGN_IN];
  }

  get isInvalidForm() {
    return !this.form.dirty || this.form.invalid;
  }

  get passwordControl() {
    return this.form.controls.password;
  }

  get passwordError(): string {
    if (!(this.passwordControl.invalid && this.passwordControl.dirty)) return '';

    return (
      this.passwordControl.errors?.['numberContains']?.message ||
      this.passwordControl.errors?.['upperCaseLetterContains']?.message ||
      this.passwordControl.errors?.['lowerCaseLetterContains']?.message
    );
  }

  form = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      ValidationUtil.numberContains,
      ValidationUtil.upperCaseLetterContains,
      ValidationUtil.lowerCaseLetterContains,
    ]),
  });

  constructor(private loadingService: LoadingService) {}

  onSubmit() {
    if (this.isInvalidForm) return;

    this.submitted.emit(this.passwordControl.value as string);
  }
}

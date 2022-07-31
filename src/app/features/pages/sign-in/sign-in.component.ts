import { Component } from '@angular/core';
import { TextFieldType } from '@shared/components/text-field/values/text-field-type.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationFullPath, NavigationPath } from '@core/values';
import { ToastService } from '@shared/components/dialog';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  textFieldType = TextFieldType;

  get forgotPasswordPath() {
    return NavigationFullPath[NavigationPath.RESET_PASSWORD];
  }

  get signUpPath() {
    return NavigationFullPath[NavigationPath.SIGN_UP];
  }

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private toastService: ToastService) {}

  onSubmit() {
    this.toastService.success('Signing in...');
  }
}

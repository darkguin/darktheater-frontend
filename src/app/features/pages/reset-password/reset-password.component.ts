import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationFullPath, NavigationPath } from '@core/values';

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

  authForm = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
  });
}

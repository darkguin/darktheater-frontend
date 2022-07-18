import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TextFieldType } from '@shared/components/text-field/values/text-field-type.enum';
import { NavigationFullPath, NavigationPath } from '@core/values';

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  textFieldType = TextFieldType;

  get forgotPasswordPath() {
    return NavigationFullPath[NavigationPath.RESET_PASSWORD];
  }

  get signInPath() {
    return NavigationFullPath[NavigationPath.SIGN_IN];
  }

  authForm = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
}

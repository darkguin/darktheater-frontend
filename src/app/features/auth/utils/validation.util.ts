import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RegexpValidation } from '@features/auth/values/regexp-validation.enum';
import { ValidationErr } from '@features/auth/models/validation-err.model';

export class ValidationUtil {
  public static get email(): ValidatorFn {
    return this.baseValidator('email', RegexpValidation.EMAIL, 'Incorrect email');
  }

  public static get numberContains(): ValidatorFn {
    return this.baseValidator(
      'numberContains',
      RegexpValidation.NUMBER_CONTAINS,
      'The value must contain at least one number',
    );
  }

  public static get lowerCaseLetterContains(): ValidatorFn {
    return this.baseValidator(
      'lowerCaseLetterContains',
      RegexpValidation.LOWERCASE_LETTER_CONTAINS,
      'The value must contain at least one lowercase letter',
    );
  }

  public static get upperCaseLetterContains(): ValidatorFn {
    return this.baseValidator(
      'upperCaseLetterContains',
      RegexpValidation.UPPERCASE_LETTER_CONTAINS,
      'The value must contain at least one uppercase letter',
    );
  }

  public static get specialCharacterContains(): ValidatorFn {
    return this.baseValidator(
      'specialCharacterContains',
      RegexpValidation.SPECIAL_CHARACTER_CONTAINS,
      'The value must contain at least one special character',
    );
  }

  private static baseValidator(
    name: string,
    regExp: RegexpValidation,
    message: string,
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const invalid = !new RegExp(regExp, 'g').test(control.value);
      const error: ValidationErr = { invalid, message };

      return invalid ? { [name]: error } : null;
    };
  }
}

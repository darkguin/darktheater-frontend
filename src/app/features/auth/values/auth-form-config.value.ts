import { AuthFormType } from '@features/auth/values/auth-form-type.enum';

export const AuthFormConfig = {
  [AuthFormType.SIGN_IN]: {
    btnName: 'Sign In',
    usernameControl: false,
    emailControl: true,
    passwordControl: true,
  },
  [AuthFormType.SIGN_UP]: {
    btnName: 'Sign Up',
    usernameControl: true,
    emailControl: true,
    passwordControl: true,
  },
  [AuthFormType.RESET_PASSWORD]: {
    btnName: 'Send reset email',
    usernameControl: false,
    emailControl: true,
    passwordControl: false,
  },
  [AuthFormType.CONFIRM_RESET_PASSWORD]: {
    btnName: 'Apply',
    usernameControl: false,
    emailControl: false,
    passwordControl: true,
  },
};

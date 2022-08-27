import { Injectable } from '@angular/core';
import { ApiError } from '@core/models';
import { ToastService } from '@shared/components/dialog';
import { ApiErrorCodes } from '@values/api/api-error-codes.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthErrorService {
  constructor(private toastService: ToastService) {}

  handleError({ error_code, detail }: ApiError) {
    let message = '';

    switch (error_code) {
      case ApiErrorCodes.ALREADY_EXISTS:
        message = 'A user with such credentials already exists';
        break;
      case ApiErrorCodes.INVALID_CREDENTIALS:
        message = 'Invalid credentials';
        break;
      case ApiErrorCodes.ALREADY_VERIFIED:
        message = 'The user with this email address has already passed the verification process';
        break;
      case ApiErrorCodes.TIMEOUT:
        message = detail;
        break;
      case ApiErrorCodes.USER_INACTIVE:
      case ApiErrorCodes.INVALID_TOKEN:
      case ApiErrorCodes.ACCESS_TOKEN_EXPIRED:
      case ApiErrorCodes.NOT_FOUND:
      default: {
        return;
      }
    }

    this.toastService.error(message, 8000);
  }
}

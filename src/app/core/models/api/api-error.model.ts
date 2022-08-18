import { ApiErrorCodes } from '@values/api/api-error-codes.enum';

export interface ApiError {
  detail: string;
  error_code: ApiErrorCodes;
}

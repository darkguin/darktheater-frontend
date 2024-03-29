export enum ApiErrorCodes {
  BASE = 'BaseError',
  INVALID_CREDENTIALS = 'InvalidCredentials',
  NOT_FOUND = 'NotFound',
  ALREADY_EXISTS = 'AlreadyExists',
  USER_INACTIVE = 'UserInactive',
  ALREADY_VERIFIED = 'AlreadyVerified',
  TIMEOUT = 'TimeoutError',
  INVALID_TOKEN = 'InvalidToken',
  TOKEN_EXPIRED = 'TokenExpired',
  REFRESH_TOKEN_NOTFOUND = 'RefreshTokenNotFound',
  ACCESS_TOKEN_EXPIRED = 'AccessTokenExpired',
}

import { ApiUser } from '@core/models';

export interface ApiAuthorization {
  access_token?: string;
  refresh_token?: string;
  user?: ApiUser;
}

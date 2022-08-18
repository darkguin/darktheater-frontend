import { UserRoles } from '@core/values';

export interface User {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
  role: UserRoles;
}

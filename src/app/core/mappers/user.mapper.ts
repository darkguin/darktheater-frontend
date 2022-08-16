import { ImplementsStatic } from '@core/decorators/implements-static.decorator';
import { ApiAuthorization, User, Mapper, ApiUser } from '@core/models';
import { UserRoles } from '@core/values';

@ImplementsStatic<Mapper<ApiUser, User>>()
export class UserMapper {
  static map({ id, username, email, is_active, role }: ApiUser): User {
    return {
      id: id,
      username: username,
      email: email,
      isActive: is_active,
      role: role as UserRoles,
    };
  }
}

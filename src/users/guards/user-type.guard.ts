import {
  Injectable,
  CanActivate,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserType } from '../user-types.enum';

export const USER_TYPES_KEY = 'userTypes';
export const UserTypes = (...userTypes: UserType[]) =>
  SetMetadata(USER_TYPES_KEY, userTypes);

@Injectable()
export class UserTypeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredTypes = this.reflector.getAllAndOverride<UserType[]>(
      USER_TYPES_KEY,
      [context.getClass(), context.getHandler()],
    );

    if (!requiredTypes || requiredTypes.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user?.userType) {
      return false;
    }

    return requiredTypes.includes(user.userType);
  }
}

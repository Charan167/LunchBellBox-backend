import { User } from '../../../../domain/user';
import { UserEntity } from '../entities/user.entity';

export class UserMapper {
  static toDomain(raw: UserEntity): User {
    const domainEntity = new User();
    domainEntity.id = raw.id;
    domainEntity.userName = raw.userName;
    domainEntity.phoneNumber = raw.phoneNumber;
    domainEntity.email = raw.email;
    domainEntity.userType = raw.userType;
    domainEntity.firstName = raw.firstName;
    domainEntity.lastName = raw.lastName;
    domainEntity.isActive = raw.isActive;
    domainEntity.isRestricted = raw.isRestricted;
    domainEntity.billingAddress = raw.billingAddress;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;
    domainEntity.deletedAt = raw.deletedAt;
    return domainEntity;
  }

  static toPersistence(domainEntity: User): UserEntity {
    const persistenceEntity = new UserEntity();
    if (domainEntity.id && typeof domainEntity.id === 'number') {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.userName = domainEntity.userName;
    persistenceEntity.phoneNumber = domainEntity.phoneNumber;
    persistenceEntity.email = domainEntity.email;
    persistenceEntity.userType = domainEntity.userType;
    persistenceEntity.firstName = domainEntity.firstName;
    persistenceEntity.lastName = domainEntity.lastName;
    persistenceEntity.isActive = domainEntity.isActive;
    persistenceEntity.isRestricted = domainEntity.isRestricted;
    persistenceEntity.billingAddress = domainEntity.billingAddress;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;
    persistenceEntity.deletedAt = domainEntity.deletedAt;
    return persistenceEntity;
  }
}

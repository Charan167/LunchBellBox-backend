import { Subscription } from '../../../../domain/subscription';
import { SubscriptionEntity } from '../entities/subscription.entity';

export class SubscriptionMapper {
  static toDomain(raw: SubscriptionEntity): Subscription {
    const domainEntity = new Subscription();
    domainEntity.id = raw.id;
    domainEntity.title = raw.title;
    domainEntity.price = Number(raw.price);
    domainEntity.status = raw.status;
    domainEntity.periodInMonths = raw.periodInMonths;
    domainEntity.tier = raw.tier;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Subscription): SubscriptionEntity {
    const persistenceEntity = new SubscriptionEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.title = domainEntity.title;
    persistenceEntity.price = domainEntity.price;
    persistenceEntity.status = domainEntity.status;
    persistenceEntity.periodInMonths = domainEntity.periodInMonths;
    persistenceEntity.tier = domainEntity.tier;
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}

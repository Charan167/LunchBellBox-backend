import { Module } from '@nestjs/common';

import { SubscriptionsController } from './subscriptions.controller';

import { SubscriptionsService } from './subscriptions.service';
import { RelationalSubscriptionPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

const infrastructurePersistenceModule = RelationalSubscriptionPersistenceModule;

@Module({
  imports: [infrastructurePersistenceModule],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
  exports: [SubscriptionsService, infrastructurePersistenceModule],
})
export class SubscriptionsModule {}

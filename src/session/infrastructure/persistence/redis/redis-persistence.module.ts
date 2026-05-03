import { Module } from '@nestjs/common';
import { SessionRepository } from '../session.repository';
import { RedisSessionRepository } from './redis-session.repository';

@Module({
  providers: [
    RedisSessionRepository,
    {
      provide: SessionRepository,
      useExisting: RedisSessionRepository,
    },
  ],
  exports: [SessionRepository],
})
export class RedisSessionPersistenceModule {}

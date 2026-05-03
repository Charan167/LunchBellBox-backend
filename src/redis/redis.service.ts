import { Injectable, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { AllConfigType } from '../config/config.type';

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly client: Redis;
  private readonly logger = new Logger(RedisService.name);

  constructor(configService: ConfigService<AllConfigType>) {
    this.client = new Redis({
      host: configService.get('redis.host', { infer: true }) ?? 'localhost',
      port: configService.get('redis.port', { infer: true }) ?? 6379,
      password: configService.get('redis.password', { infer: true }),
      db: configService.get('redis.db', { infer: true }) ?? 0,
    });

    this.client.on('connect', () => {
      this.logger.log('Redis connected');
    });

    this.client.on('error', (err) => {
      this.logger.error('Redis connection error', err);
    });
  }

  getClient(): Redis {
    return this.client;
  }

  async onModuleDestroy(): Promise<void> {
    await this.client.quit();
  }
}

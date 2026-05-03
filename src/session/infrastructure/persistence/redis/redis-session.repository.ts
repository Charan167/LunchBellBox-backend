import { Injectable } from '@nestjs/common';
import { RedisService } from '../../../../redis/redis.service';
import { NullableType } from '../../../../utils/types/nullable.type';
import { SessionRepository } from '../session.repository';
import { Session } from '../../../domain/session';
import { User } from '../../../../users/domain/user';

interface RedisSessionData {
  id: number;
  userId: string;
  hash: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class RedisSessionRepository implements SessionRepository {
  private readonly SESSION_PREFIX = 'session:';
  private readonly USER_SESSIONS_PREFIX = 'session:user:';
  private readonly NEXT_ID_KEY = 'session:nextId';

  constructor(private readonly redisService: RedisService) {}

  private serialize(session: RedisSessionData): string {
    return JSON.stringify(session);
  }

  private deserialize(data: string): RedisSessionData {
    return JSON.parse(data) as RedisSessionData;
  }

  private toDomain(data: RedisSessionData): Session {
    const session = new Session();
    session.id = data.id;
    session.user = { id: data.userId } as User;
    session.hash = data.hash;
    session.createdAt = new Date(data.createdAt);
    session.updatedAt = new Date(data.updatedAt);
    session.deletedAt = new Date(0);
    return session;
  }

  async findById(id: Session['id']): Promise<NullableType<Session>> {
    const client = this.redisService.getClient();
    const data = await client.get(`${this.SESSION_PREFIX}${id}`);

    if (!data) {
      return null;
    }

    return this.toDomain(this.deserialize(data));
  }

  async create(
    data: Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<Session> {
    const client = this.redisService.getClient();
    const id = await client.incr(this.NEXT_ID_KEY);
    const now = new Date().toISOString();

    const sessionData: RedisSessionData = {
      id,
      userId: data.user.id,
      hash: data.hash,
      createdAt: now,
      updatedAt: now,
    };

    await Promise.all([
      client.set(`${this.SESSION_PREFIX}${id}`, this.serialize(sessionData)),
      client.sadd(
        `${this.USER_SESSIONS_PREFIX}${sessionData.userId}`,
        String(id),
      ),
    ]);

    return this.toDomain(sessionData);
  }

  async update(
    id: Session['id'],
    payload: Partial<
      Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ): Promise<Session | null> {
    const client = this.redisService.getClient();
    const data = await client.get(`${this.SESSION_PREFIX}${id}`);

    if (!data) {
      return null;
    }

    const existing = this.deserialize(data);

    if (payload.hash !== undefined) {
      existing.hash = payload.hash;
    }
    existing.updatedAt = new Date().toISOString();

    await client.set(`${this.SESSION_PREFIX}${id}`, this.serialize(existing));

    return this.toDomain(existing);
  }

  async updateByHash(
    conditions: { id: Session['id']; hash: Session['hash'] },
    payload: Partial<
      Omit<Session, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>
    >,
  ): Promise<Session | null> {
    const client = this.redisService.getClient();
    const data = await client.get(`${this.SESSION_PREFIX}${conditions.id}`);

    if (!data) {
      return null;
    }

    const existing = this.deserialize(data);

    if (existing.hash !== conditions.hash) {
      return null;
    }

    if (payload.hash !== undefined) {
      existing.hash = payload.hash;
    }
    existing.updatedAt = new Date().toISOString();

    await client.set(
      `${this.SESSION_PREFIX}${conditions.id}`,
      this.serialize(existing),
    );

    return this.toDomain(existing);
  }

  async deleteById(id: Session['id']): Promise<void> {
    const client = this.redisService.getClient();
    const data = await client.get(`${this.SESSION_PREFIX}${id}`);

    if (data) {
      const existing = this.deserialize(data);
      await Promise.all([
        client.del(`${this.SESSION_PREFIX}${id}`),
        client.srem(
          `${this.USER_SESSIONS_PREFIX}${existing.userId}`,
          String(id),
        ),
      ]);
    }
  }

  async deleteByUserId(conditions: { userId: User['id'] }): Promise<void> {
    const client = this.redisService.getClient();
    const sessionIds = await client.smembers(
      `${this.USER_SESSIONS_PREFIX}${conditions.userId}`,
    );

    if (sessionIds.length > 0) {
      const keys = sessionIds.map(
        (sessionId) => `${this.SESSION_PREFIX}${sessionId}`,
      );
      await Promise.all([
        ...keys.map((key) => client.del(key)),
        client.del(`${this.USER_SESSIONS_PREFIX}${conditions.userId}`),
      ]);
    }
  }

  async deleteByUserIdWithExclude(conditions: {
    userId: User['id'];
    excludeSessionId: Session['id'];
  }): Promise<void> {
    const client = this.redisService.getClient();
    const excludeId = String(conditions.excludeSessionId);
    const sessionIds = await client.smembers(
      `${this.USER_SESSIONS_PREFIX}${conditions.userId}`,
    );

    const toDelete = sessionIds.filter((id) => id !== excludeId);

    if (toDelete.length > 0) {
      const keys = toDelete.map(
        (sessionId) => `${this.SESSION_PREFIX}${sessionId}`,
      );
      await Promise.all([
        ...keys.map((key) => client.del(key)),
        ...toDelete.map((id) =>
          client.srem(`${this.USER_SESSIONS_PREFIX}${conditions.userId}`, id),
        ),
      ]);
    }
  }
}

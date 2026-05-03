import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { FindOptionsWhere, Repository, In } from 'typeorm';
import { SubscriptionEntity } from '../entities/subscription.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Subscription } from '../../../../domain/subscription';
import { SubscriptionRepository } from '../../subscription.repository';
import { SubscriptionMapper } from '../mappers/subscription.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';
import { QuerySubscriptionDto } from '../../../../dto/query-subscription.dto';
import { SubStatusEnum } from '../../../../enums/sub-status.enum';

@Injectable()
export class SubscriptionsRelationalRepository implements SubscriptionRepository {
  constructor(
    @InjectRepository(SubscriptionEntity)
    private readonly subscriptionsRepository: Repository<SubscriptionEntity>,
  ) {}

  async create(data: Subscription): Promise<Subscription> {
    const persistenceModel = SubscriptionMapper.toPersistence(data);
    const newEntity = await this.subscriptionsRepository.save(
      this.subscriptionsRepository.create(persistenceModel),
    );
    return SubscriptionMapper.toDomain(newEntity);
  }

  async findManyWithPagination({
    filterOptions,
    paginationOptions,
  }: {
    filterOptions?: QuerySubscriptionDto | null;
    paginationOptions: IPaginationOptions;
  }): Promise<Subscription[]> {
    const where: FindOptionsWhere<SubscriptionEntity> = {};

    if (filterOptions?.tier) {
      where.tier = filterOptions.tier;
    }

    if (filterOptions?.status) {
      where.status = filterOptions.status;
    }

    const entities = await this.subscriptionsRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
      where,
    });

    return entities.map((entity) => SubscriptionMapper.toDomain(entity));
  }

  async findById(id: Subscription['id']): Promise<NullableType<Subscription>> {
    const entity = await this.subscriptionsRepository.findOne({
      where: { id },
    });

    return entity ? SubscriptionMapper.toDomain(entity) : null;
  }

  async findByIds(ids: Subscription['id'][]): Promise<Subscription[]> {
    const entities = await this.subscriptionsRepository.find({
      where: { id: In(ids) },
    });

    return entities.map((entity) => SubscriptionMapper.toDomain(entity));
  }

  async update(
    id: Subscription['id'],
    payload: Partial<Subscription>,
  ): Promise<Subscription> {
    const entity = await this.subscriptionsRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Subscription not found');
    }

    const updatedEntity = await this.subscriptionsRepository.save(
      this.subscriptionsRepository.create(
        SubscriptionMapper.toPersistence({
          ...SubscriptionMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return SubscriptionMapper.toDomain(updatedEntity);
  }

  async remove(id: Subscription['id']): Promise<void> {
    await this.subscriptionsRepository.softDelete(id);
  }
}

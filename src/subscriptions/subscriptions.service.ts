import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SubscriptionRepository } from './infrastructure/persistence/subscription.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Subscription } from './domain/subscription';
import { NullableType } from '../utils/types/nullable.type';
import { QuerySubscriptionDto } from './dto/query-subscription.dto';
import { SubStatusEnum } from './enums/sub-status.enum';

@Injectable()
export class SubscriptionsService {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionRepository.create({
      title: createSubscriptionDto.title,
      price: createSubscriptionDto.price,
      status: createSubscriptionDto.status ?? SubStatusEnum.draft,
      periodInMonths: createSubscriptionDto.periodInMonths,
      tier: createSubscriptionDto.tier,
    });
  }

  findManyWithPagination({
    filterOptions,
    paginationOptions,
  }: {
    filterOptions?: QuerySubscriptionDto | null;
    paginationOptions: IPaginationOptions;
  }): Promise<Subscription[]> {
    return this.subscriptionRepository.findManyWithPagination({
      filterOptions,
      paginationOptions,
    });
  }

  findById(id: Subscription['id']): Promise<NullableType<Subscription>> {
    return this.subscriptionRepository.findById(id);
  }

  findByIds(ids: Subscription['id'][]): Promise<Subscription[]> {
    return this.subscriptionRepository.findByIds(ids);
  }

  async update(
    id: Subscription['id'],
    updateSubscriptionDto: UpdateSubscriptionDto,
  ): Promise<Subscription | null> {
    return this.subscriptionRepository.update(id, {
      title: updateSubscriptionDto.title,
      price: updateSubscriptionDto.price,
      status: updateSubscriptionDto.status,
      periodInMonths: updateSubscriptionDto.periodInMonths,
      tier: updateSubscriptionDto.tier,
    });
  }

  async remove(id: Subscription['id']): Promise<void> {
    await this.subscriptionRepository.remove(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  HttpStatus,
  HttpCode,
  SerializeOptions,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';

import {
  InfinityPaginationResponse,
  InfinityPaginationResponseDto,
} from '../utils/dto/infinity-pagination-response.dto';
import { NullableType } from '../utils/types/nullable.type';
import { QuerySubscriptionDto } from './dto/query-subscription.dto';
import { Subscription } from './domain/subscription';
import { SubscriptionsService } from './subscriptions.service';
import { RolesGuard } from '../roles/roles.guard';
import { infinityPagination } from '../utils/infinity-pagination';
import { SubStatusEnum } from './enums/sub-status.enum';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Subscriptions')
@Controller({
  path: 'subscriptions',
  version: '1',
})
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @ApiCreatedResponse({
    type: Subscription,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Roles(RoleEnum.admin)
  @UseGuards(RolesGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<Subscription> {
    return this.subscriptionsService.create(createSubscriptionDto);
  }

  @ApiOkResponse({
    type: InfinityPaginationResponse(Subscription),
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query() query: QuerySubscriptionDto,
    @Req() req: any,
  ): Promise<InfinityPaginationResponseDto<Subscription>> {
    const page = query?.page ?? 1;
    let limit = query?.limit ?? 10;
    if (limit > 50) {
      limit = 50;
    }

    const isAdmin = req.user?.role?.id === RoleEnum.admin;

    const filterOptions: QuerySubscriptionDto = {
      ...query,
      status: isAdmin ? query?.status : SubStatusEnum.published,
    };

    return infinityPagination(
      await this.subscriptionsService.findManyWithPagination({
        filterOptions,
        paginationOptions: {
          page,
          limit,
        },
      }),
      { page, limit },
    );
  }

  @ApiOkResponse({
    type: Subscription,
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  async findOne(
    @Param('id') id: Subscription['id'],
    @Req() req: any,
  ): Promise<NullableType<Subscription>> {
    const subscription = await this.subscriptionsService.findById(id);

    if (!subscription) {
      throw new NotFoundException('Subscription not found');
    }

    const isAdmin = req.user?.role?.id === RoleEnum.admin;

    if (!isAdmin && subscription.status !== SubStatusEnum.published) {
      throw new NotFoundException('Subscription not found');
    }

    return subscription;
  }

  @ApiOkResponse({
    type: Subscription,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Roles(RoleEnum.admin)
  @UseGuards(RolesGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  update(
    @Param('id') id: Subscription['id'],
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ): Promise<Subscription | null> {
    return this.subscriptionsService.update(id, updateSubscriptionDto);
  }

  @Roles(RoleEnum.admin)
  @UseGuards(RolesGuard)
  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: Subscription['id']): Promise<void> {
    return this.subscriptionsService.remove(id);
  }
}

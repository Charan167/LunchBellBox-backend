import { ApiProperty } from '@nestjs/swagger';
import { TierEnum } from '../enums/tier.enum';
import { SubStatusEnum } from '../enums/sub-status.enum';

export class Subscription {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
    example: 'Basic Plan',
  })
  title: string;

  @ApiProperty({
    type: Number,
    example: 9.99,
  })
  price: number;

  @ApiProperty({
    enum: SubStatusEnum,
    example: SubStatusEnum.draft,
  })
  status: SubStatusEnum;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  periodInMonths: number;

  @ApiProperty({
    enum: TierEnum,
    example: TierEnum.starter,
  })
  tier: TierEnum;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

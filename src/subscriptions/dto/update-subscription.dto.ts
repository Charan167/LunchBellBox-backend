import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateSubscriptionDto } from './create-subscription.dto';
import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { TierEnum } from '../enums/tier.enum';
import { SubStatusEnum } from '../enums/sub-status.enum';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {
  @ApiPropertyOptional({ example: 'Basic Plan', type: String })
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({ example: 9.99, type: Number })
  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @ApiPropertyOptional({ enum: SubStatusEnum, example: SubStatusEnum.draft })
  @IsOptional()
  @IsEnum(SubStatusEnum)
  status?: SubStatusEnum;

  @ApiPropertyOptional({ example: 1, type: Number })
  @IsOptional()
  @IsNumber()
  @Min(1)
  periodInMonths?: number;

  @ApiPropertyOptional({ enum: TierEnum, example: TierEnum.starter })
  @IsOptional()
  @IsEnum(TierEnum)
  tier?: TierEnum;
}

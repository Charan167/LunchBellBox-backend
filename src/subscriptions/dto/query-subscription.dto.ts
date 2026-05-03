import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { TierEnum } from '../enums/tier.enum';
import { SubStatusEnum } from '../enums/sub-status.enum';

export class QuerySubscriptionDto {
  @ApiPropertyOptional()
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsNumber()
  @IsOptional()
  page?: number;

  @ApiPropertyOptional()
  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsNumber()
  @IsOptional()
  limit?: number;

  @ApiPropertyOptional({ enum: TierEnum })
  @IsOptional()
  @IsEnum(TierEnum)
  tier?: TierEnum;

  @ApiPropertyOptional({ enum: SubStatusEnum })
  @IsOptional()
  @IsEnum(SubStatusEnum)
  status?: SubStatusEnum;
}

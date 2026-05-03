import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';
import { TierEnum } from '../enums/tier.enum';
import { SubStatusEnum } from '../enums/sub-status.enum';

export class CreateSubscriptionDto {
  @ApiProperty({ example: 'Basic Plan', type: String })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 9.99, type: Number })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @ApiPropertyOptional({ enum: SubStatusEnum, example: SubStatusEnum.draft })
  @IsOptional()
  @IsEnum(SubStatusEnum)
  status?: SubStatusEnum;

  @ApiProperty({ example: 1, type: Number })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  periodInMonths: number;

  @ApiProperty({ enum: TierEnum, example: TierEnum.starter })
  @IsNotEmpty()
  @IsEnum(TierEnum)
  tier: TierEnum;
}

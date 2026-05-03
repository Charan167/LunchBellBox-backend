import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator';

export class AuthUpdateDto {
  @ApiPropertyOptional({ example: 'John' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  firstName?: string;

  @ApiPropertyOptional({ example: 'Doe' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  lastName?: string;

  @ApiPropertyOptional({ example: '+1234567890' })
  @IsOptional()
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber?: string;

  @ApiPropertyOptional({ example: 'john.doe@example.com' })
  @IsOptional()
  @IsNotEmpty()
  email?: string;
}

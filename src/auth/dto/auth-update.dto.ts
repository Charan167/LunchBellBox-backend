import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { IsValidPhoneNumber } from '../../utils/validators/is-valid-phone-number.validator';

export class AuthUpdateDto {
  @ApiPropertyOptional({ example: 'John' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  firstName?: string;

  @ApiPropertyOptional({ example: 'Doe' })
  @IsOptional()
  @IsNotEmpty({ message: 'mustBeNotEmpty' })
  lastName?: string;

  @ApiPropertyOptional({ example: '9449234343' })
  @IsOptional()
  @IsNotEmpty()
  @IsValidPhoneNumber()
  phoneNumber?: string;

  @ApiPropertyOptional({ example: 'john.doe@example.com' })
  @IsOptional()
  @IsNotEmpty()
  email?: string;
}

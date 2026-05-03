import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { IsValidPhoneNumber } from '../../utils/validators/is-valid-phone-number.validator';

export class AuthRequestOtpDto {
  @ApiProperty({ example: '9449234343', type: String })
  @IsNotEmpty()
  @IsString()
  @IsValidPhoneNumber()
  phoneNumber: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { IsValidPhoneNumber } from '../../utils/validators/is-valid-phone-number.validator';

export class AuthVerifyOtpDto {
  @ApiProperty({ example: '9449234343', type: String })
  @IsNotEmpty()
  @IsString()
  @IsValidPhoneNumber()
  phoneNumber: string;

  @ApiProperty({ example: '123456', type: String })
  @IsNotEmpty()
  @IsString()
  @Length(6, 6)
  otp: string;
}

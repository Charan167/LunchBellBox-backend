import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber, IsString, Length } from 'class-validator';

export class AuthVerifyOtpDto {
  @ApiProperty({ example: '+1234567890', type: String })
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;

  @ApiProperty({ example: '123456', type: String })
  @IsNotEmpty()
  @IsString()
  @Length(6, 6)
  otp: string;
}

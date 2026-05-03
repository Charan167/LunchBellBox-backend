import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class AuthRequestOtpDto {
  @ApiProperty({ example: '+1234567890', type: String })
  @IsNotEmpty()
  @IsPhoneNumber()
  phoneNumber: string;
}

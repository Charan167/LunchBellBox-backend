import { ApiProperty } from '@nestjs/swagger';

export class AuthRequestOtpResponseDto {
  @ApiProperty({ example: 'OTP sent successfully' })
  message: string;

  @ApiProperty({ example: false })
  newUser: boolean;
}

import { Injectable } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class OtpService {
  private readonly OTP_PREFIX = 'secure-otp:';
  private readonly OTP_EXPIRY_SECONDS = 300; // 5 minutes
  private readonly DUMMY_OTP = '123456';

  constructor(private readonly redisService: RedisService) { }

  async generateOtp(phoneNumber: string): Promise<string> {
    const isNonProduction = process.env.NODE_ENV !== 'production';
    const otp = isNonProduction
      ? this.DUMMY_OTP
      : Math.floor(100000 + Math.random() * 900000).toString();

    const client = this.redisService.getClient();
    await client.setex(
      `${this.OTP_PREFIX}${phoneNumber}`,
      this.OTP_EXPIRY_SECONDS,
      otp,
    );

    return otp;
  }

  async verifyOtp(phoneNumber: string, otp: string): Promise<boolean> {
    const client = this.redisService.getClient();
    const key = `${this.OTP_PREFIX}${phoneNumber}`;
    const storedOtp = await client.get(key);

    if (!storedOtp) {
      return false;
    }

    if (storedOtp !== otp) {
      return false;
    }

    await client.del(key);
    return true;
  }
}

import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { UserType } from '../user-types.enum';
import { IsValidPhoneNumber } from '../../utils/validators/is-valid-phone-number.validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: '9449234343', type: String })
  @IsOptional()
  @IsValidPhoneNumber()
  phoneNumber?: string;

  @ApiPropertyOptional({ example: 'johndoe', type: String })
  @IsOptional()
  userName?: string | null;

  @ApiPropertyOptional({ example: 'john.doe@example.com', type: String })
  @IsOptional()
  email?: string | null;

  @ApiPropertyOptional({ enum: UserType })
  @IsOptional()
  @IsEnum(UserType)
  userType?: UserType;

  @ApiPropertyOptional({ example: 'John', type: String })
  @IsOptional()
  firstName?: string | null;

  @ApiPropertyOptional({ example: 'Doe', type: String })
  @IsOptional()
  lastName?: string | null;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  isActive?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  isRestricted?: boolean;

  @ApiPropertyOptional({ example: '123 Main St, City, Country', type: String })
  @IsOptional()
  billingAddress?: string | null;
}

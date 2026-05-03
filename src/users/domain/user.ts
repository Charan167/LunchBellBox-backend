import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserType } from '../user-types.enum';

export class User {
  @ApiProperty({
    type: String,
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  id: string;

  @ApiPropertyOptional({
    type: String,
    example: 'johndoe',
  })
  userName: string | null;

  @ApiProperty({
    type: String,
    example: '+1234567890',
  })
  phoneNumber: string;

  @ApiPropertyOptional({
    type: String,
    example: 'john.doe@example.com',
  })
  email: string | null;

  @ApiProperty({
    enum: UserType,
    example: UserType.User,
  })
  userType: UserType;

  @ApiPropertyOptional({
    type: String,
    example: 'John',
  })
  firstName: string | null;

  @ApiPropertyOptional({
    type: String,
    example: 'Doe',
  })
  lastName: string | null;

  @ApiProperty({
    type: Boolean,
    example: false,
  })
  isActive: boolean;

  @ApiProperty({
    type: Boolean,
    example: false,
  })
  isRestricted: boolean;

  @ApiPropertyOptional({
    type: String,
    example: '123 Main St, City, Country',
  })
  billingAddress: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}

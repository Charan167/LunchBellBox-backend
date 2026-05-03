import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { UserType } from '../../../../users/user-types.enum';
import { UserEntity } from '../../../../users/infrastructure/persistence/relational/entities/user.entity';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async run() {
    const countAdmin = await this.repository.count({
      where: {
        userType: UserType.SuperAdmin,
      },
    });

    if (!countAdmin) {
      await this.repository.save(
        this.repository.create({
          firstName: 'Super',
          lastName: 'Admin',
          userName: 'superadmin',
          phoneNumber: '+1000000000',
          email: 'admin@example.com',
          userType: UserType.SuperAdmin,
          isActive: true,
          isRestricted: false,
        }),
      );
    }

    const countUser = await this.repository.count({
      where: {
        userType: UserType.User,
      },
    });

    if (!countUser) {
      await this.repository.save(
        this.repository.create({
          firstName: 'John',
          lastName: 'Doe',
          userName: 'johndoe',
          phoneNumber: '+1000000001',
          email: 'john.doe@example.com',
          userType: UserType.User,
          isActive: true,
          isRestricted: false,
        }),
      );
    }
  }
}

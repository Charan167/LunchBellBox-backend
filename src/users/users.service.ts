import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { NullableType } from '../utils/types/nullable.type';
import { FilterUserDto, SortUserDto } from './dto/query-user.dto';
import { UserRepository } from './infrastructure/persistence/user.repository';
import { User } from './domain/user';
import { UserType } from './user-types.enum';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.phoneNumber) {
      const userObject = await this.usersRepository.findByPhoneNumber(
        createUserDto.phoneNumber,
      );
      if (userObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            phoneNumber: 'phoneNumberAlreadyExists',
          },
        });
      }
    }

    const validUserTypes = Object.values(UserType);
    if (!validUserTypes.includes(createUserDto.userType)) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          userType: 'userTypeNotExists',
        },
      });
    }

    return this.usersRepository.create({
      phoneNumber: createUserDto.phoneNumber,
      userName: createUserDto.userName ?? null,
      email: createUserDto.email ?? null,
      userType: createUserDto.userType,
      firstName: createUserDto.firstName ?? null,
      lastName: createUserDto.lastName ?? null,
      isActive: createUserDto.isActive ?? false,
      isRestricted: createUserDto.isRestricted ?? false,
      billingAddress: createUserDto.billingAddress ?? null,
    });
  }

  findManyWithPagination({
    filterOptions,
    sortOptions,
    paginationOptions,
  }: {
    filterOptions?: FilterUserDto | null;
    sortOptions?: SortUserDto[] | null;
    paginationOptions: IPaginationOptions;
  }): Promise<User[]> {
    return this.usersRepository.findManyWithPagination({
      filterOptions,
      sortOptions,
      paginationOptions,
    });
  }

  findById(id: User['id']): Promise<NullableType<User>> {
    return this.usersRepository.findById(id);
  }

  findByIds(ids: User['id'][]): Promise<User[]> {
    return this.usersRepository.findByIds(ids);
  }

  findByPhoneNumber(
    phoneNumber: User['phoneNumber'],
  ): Promise<NullableType<User>> {
    return this.usersRepository.findByPhoneNumber(phoneNumber);
  }

  async update(
    id: User['id'],
    updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    if (updateUserDto.phoneNumber) {
      const userObject = await this.usersRepository.findByPhoneNumber(
        updateUserDto.phoneNumber,
      );

      if (userObject && userObject.id !== id) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            phoneNumber: 'phoneNumberAlreadyExists',
          },
        });
      }
    }

    if (updateUserDto.userType) {
      const validUserTypes = Object.values(UserType);
      if (!validUserTypes.includes(updateUserDto.userType)) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            userType: 'userTypeNotExists',
          },
        });
      }
    }

    return this.usersRepository.update(id, {
      phoneNumber: updateUserDto.phoneNumber,
      userName: updateUserDto.userName,
      email: updateUserDto.email,
      userType: updateUserDto.userType,
      firstName: updateUserDto.firstName,
      lastName: updateUserDto.lastName,
      isActive: updateUserDto.isActive,
      isRestricted: updateUserDto.isRestricted,
      billingAddress: updateUserDto.billingAddress,
    });
  }

  async remove(id: User['id']): Promise<void> {
    await this.usersRepository.remove(id);
  }
}

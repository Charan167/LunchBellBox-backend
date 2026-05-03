import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { UserType } from '../../../../user-types.enum';

@Entity({
  name: 'user',
})
export class UserEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ type: String, nullable: true })
  userName: string | null;

  @Index()
  @Column({ type: String, unique: true })
  phoneNumber: string;

  @Column({ type: String, nullable: true })
  email: string | null;

  @Column({ type: 'enum', enum: UserType, default: UserType.User })
  userType: UserType;

  @Index()
  @Column({ type: String, nullable: true })
  firstName: string | null;

  @Column({ type: String, nullable: true })
  lastName: string | null;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isRestricted: boolean;

  @Column({ type: 'text', nullable: true })
  billingAddress: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

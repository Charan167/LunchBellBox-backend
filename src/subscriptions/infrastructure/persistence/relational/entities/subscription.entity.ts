import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { TierEnum } from '../../../../enums/tier.enum';
import { SubStatusEnum } from '../../../../enums/sub-status.enum';

@Entity({
  name: 'subscription',
})
export class SubscriptionEntity extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: String })
  title: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'enum', enum: SubStatusEnum, default: SubStatusEnum.draft })
  status: SubStatusEnum;

  @Column({ type: 'int' })
  periodInMonths: number;

  @Column({ type: 'enum', enum: TierEnum })
  tier: TierEnum;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import User from './User';

/**
 * @TODO validation 추가 / title, detail - length 협의 후 수정
 */
@Entity('clean_plan')
export default class CleanPlan extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cleanPlanId' })
  cleanPlanId: number;

  @Column('varchar', { name: 'date', length: 10 })
  date: string;

  @Column('varchar', { name: 'category', length: 30 })
  category: string;

  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @Column('varchar', { name: 'detail', length: 150, nullable: true })
  detail: string;

  @Column('varchar', { name: 'notification', length: 10 })
  notification: string;

  @ManyToOne(() => User, (user) => user.cleanPlans, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'userId' }])
  user: User;
}

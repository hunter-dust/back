import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import User from './User';

@Entity('day_clean_plan_category_list')
export default class DayCleanPlanCategoryList extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'dayCleanPlanCategoryListId' })
  dayCleanPlanCategoryListId: number;

  @Column('varchar', { name: 'date', length: 10 })
  date: string;

  @Column('varchar', { name: 'category', array: true })
  category: string[];

  @ManyToOne(() => User, (user) => user.dayCleanPlanCategoryLists, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'userId' }])
  user: User;
}

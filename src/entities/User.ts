import {
  Entity,
  Column,
  BaseEntity,
  Index,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import CleanPlan from './cleanPlan';
import DayCleanPlanCategoryList from './DayCleanPlanCategoryList';

/**
 * @TODO validation 추가
 */
@Entity('users')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'userId' })
  userId: number;

  @Index()
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @Column('varchar', { name: 'provider', length: 10 })
  provider: string;

  @Column('varchar', { name: 'snsId', length: 50 })
  snsId: string;

  @OneToMany(() => CleanPlan, (cleanplan) => cleanplan.user)
  cleanPlans: CleanPlan[];

  @OneToMany(
    () => DayCleanPlanCategoryList,
    (daycleanplancategorylist) => daycleanplancategorylist.user,
  )
  dayCleanPlanCategoryLists: DayCleanPlanCategoryList[];
}

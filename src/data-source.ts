import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import User from './entities/User';
import DayCleanPlanCategoryList from './entities/DayCleanPlanCategoryList';
import CleanPlan from './entities/cleanPlan';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [User, DayCleanPlanCategoryList, CleanPlan],
  migrations: [],
  subscribers: [],
});

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'dotenv/config';
import User from './entities/User';
import DayCleanPlanCategoryList from './entities/DayCleanPlanCategoryList';
import CleanPlan from './entities/cleanPlan';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: false,
      logging: false,
      entities: [User, DayCleanPlanCategoryList, CleanPlan],
      migrations: [__dirname + '/migrations/*.ts'],
      keepConnectionAlive: true, // hot reload 될 때 db 연결 끊기는 것 방지
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

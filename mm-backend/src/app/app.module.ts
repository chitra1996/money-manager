import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { CategoryModule } from './category/category.module';
import { ExpenseModule } from './expense/expense.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Category } from './category/category.entity';
import { Expense } from './expense/expense.entity';
import { AuthModule } from './auth/auth.module';
import {appConfig} from "../config/config";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: appConfig.host,
      port: 3306,
      username: appConfig.username,
      password: appConfig.password,
      database: appConfig.database,
      entities: [Category, Expense, User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    ExpenseModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

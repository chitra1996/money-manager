import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { BudgetModule } from './budget/budget.module';
import { ExpenseModule } from './expense/expense.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Budget } from './budget/budget.entity';
import { Expense } from './expense/expense.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Bestofme@12345',
      database: 'money_manager',
      entities: [Budget, Expense, User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    ExpenseModule,
    BudgetModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";

import { BudgetsModule } from './budget/budget.module';
import { ExpensesModule } from './expense/expense.module';
import { UsersModule } from './user/user.module';
import { User } from './user/user.entity';
import { Budget } from './budget/budget.entity';
import { Expense } from './expense/expense.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Bestofme@12345",
    database: "money_manager",
    entities: [
      Budget,
      Expense,
      User,
    ],
    synchronize: true,
    autoLoadEntities: true,
  }), UsersModule, ExpensesModule, BudgetsModule,],
  controllers: [AppController],
  providers: [],
})

export class AppModule {
  constructor(private connection: Connection) { }
}

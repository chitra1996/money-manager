
import { Module } from "@nestjs/common";
import { ExpenseService } from "./expense.service";
import { ExpenseController } from "./expense.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Expense } from "./expense.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [ExpenseController],
  providers: [ExpenseService]
})
export class ExpensesModule { }
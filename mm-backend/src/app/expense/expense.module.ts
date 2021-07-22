
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ExpenseService } from "./expense.service";
import { ExpenseController } from "./expense.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Expense } from "./expense.entity";
import { authenticateUser } from "../../middlewares/AuthenticateRequest/authenticateUser";
import { ValidateExpense } from "src/middlewares/ValidateRequest/ValidateExpense";


@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [ExpenseController],
  providers: [ExpenseService]
})

export class ExpensesModule implements NestModule { 
    async configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(ValidateExpense, await authenticateUser)
      .forRoutes(ExpenseController)
    }
}
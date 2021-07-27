import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { ValidateExpense } from '../../middlewares/ValidateRequest/ValidateExpense';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpensesModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateExpense).forRoutes(ExpenseController);
  }
}

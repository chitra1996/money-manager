import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { ValidateExpense } from '../../middlewares/ValidateExpense';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ValidateExpense)
    .exclude(
      { path: 'expense', method: RequestMethod.GET },
      { path: 'expense/:user_id', method: RequestMethod.GET },
      { path: 'expense/:expense_id', method: RequestMethod.DELETE },
    )
    .forRoutes(ExpenseController);
  }
}

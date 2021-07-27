import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './budget.entity';
import { ValidateExpense } from '../../middlewares/ValidateRequest/ValidateExpense';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetsModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateExpense).forRoutes(BudgetController);
  }
}

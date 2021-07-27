import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './budget.entity';
import { ValidateBudget } from '../../middlewares/ValidateBudget';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  controllers: [BudgetController],
  providers: [BudgetService],
})
export class BudgetModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateBudget)
      .exclude(
        { path: 'budget', method: RequestMethod.GET },
        { path: 'budget/:user_id', method: RequestMethod.GET },
        { path: 'budget/:budget_id', method: RequestMethod.DELETE },
      )
      .forRoutes(BudgetController);
  }
}

import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { BudgetService } from './budget.service';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post('create')
  async createExpense(
    @Headers('user_id') user_id: string,
    @Body('budget') budget: string,
    @Body('category') category: string
  ): Promise<any> {
    const payload = {
      user_id,
      budget,
      category
    }
    return await this.budgetService.createCategoryBudget(payload);

  }

  @Get('/')
  getBudget(): string {
    return this.budgetService.getBudget();
  }
}

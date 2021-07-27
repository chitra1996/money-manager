import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ExpenseService } from './expense.service';

@UseGuards(JwtAuthGuard)
@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post('create')
  async createExpense(
    @Headers('user_id') user_id: string,
    @Body('description') description: string,
    @Body('classification') classification: string,
    @Body('category_id') category_id: string,
    @Body('amount') amount: string,
  ): Promise<any> {
    const payload = {
      user_id,
      description,
      classification,
      category_id,
      amount,
    };
    return await this.expenseService.createExpense(payload);
  }

  @Get('/')
  getExpense(): string {
    return this.expenseService.getExpense();
  }
}

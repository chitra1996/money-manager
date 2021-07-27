import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ExpenseService } from './expense.service';

@UseGuards(JwtAuthGuard)
@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async createExpense(
    @Req() req: Request,
    @Body('description') description: string,
    @Body('classification') classification: string,
    @Body('category_id') category_id: string,
    @Body('amount') amount: string,
  ): Promise<any> {
    try {
      const payload = {
        user_id: req.user['id'],
        description,
        classification,
        category_id,
        amount,
      };
      return await this.expenseService.createExpense(payload);
    } catch (error) {
      throw error;
    }
  }

  @Get('/')
  getExpense(): string {
    return this.expenseService.getExpense();
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IExpenseResponse } from './expense.interface';
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
        user_id: req.user['user_id'],
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

  @Get()
  async getExpenseByExpenseId(
    @Query('expense_id') expense_id: string,
  ): Promise<IExpenseResponse> {
    try {
      return await this.expenseService.getExpenseByExpenseId(expense_id);
    } catch (error) {
      throw error;
    }
  }

  @Get('/:user_id')
  async getExpenseByUserId(
    @Param('user_id') user_id: string,
  ): Promise<IExpenseResponse[]> {
    try {
      return await this.expenseService.getExpenseByUserId(user_id);
    } catch (error) {
      throw error;
    }
  }

  @Put('/:expense_id')
  async updateExpenseByExpenseId(
    @Param('expense_id') expense_id: string,
    @Req() req: Request,
  ): Promise<IExpenseResponse> {
    try {
      const payload = req.body;
      return await this.expenseService.updateExpenseByExpenseId(
        expense_id,
        payload,
      );
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:expense_id')
  async deleteExpenseByExpenseId(
    @Param('expense_id') user_id: string,
  ): Promise<IExpenseResponse> {
    try {
      return await this.expenseService.deleteExpenseByExpenseId(user_id);
    } catch (error) {
      throw error;
    }
  }
}

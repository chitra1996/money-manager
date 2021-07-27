import { HttpException, Injectable } from '@nestjs/common';
import { Expense } from './expense.entity';
import { IExpenseResponse } from './expense.interface';

@Injectable()
export class ExpenseService {
  async createExpense(payload: any): Promise<IExpenseResponse> {
    try {
      const expenseData = await Expense.save(payload);
      return this.buildExpenseResponse(expenseData)
    } catch (error) {
      throw new HttpException(`Expense data could not be stored in DB. Error: ${error}`, 500);
    }
  }

  getExpense(): string {
    return 'Hello World, I am from the expense service!';
  }

  private buildExpenseResponse(data: Expense): IExpenseResponse {
    return {
      expense_id: data.id,
      user_id: data.user_id,
      category_id: data.category_id,
      description: data.description,
      classification: data.classification,
      amount: data.amount,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }
}

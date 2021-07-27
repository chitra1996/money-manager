import { Injectable } from '@nestjs/common';
import { Expense } from './expense.entity';

@Injectable()
export class ExpenseService {
  async createExpense(payload): Promise<any> {
    let newExpense = Expense.create();
    newExpense = {
      ...newExpense,
      ...payload,
    };
    return await Expense.save(newExpense);
  }

  getExpense(): string {
    return 'Hello World, I am from the expense service!';
  }
}

import { Injectable } from '@nestjs/common';
import { Budget } from './budget.entity';

@Injectable()
export class BudgetService {
  async createCategoryBudget(payload): Promise<any> {
    let newCategoryBudget = Budget.create();
    newCategoryBudget = {
      ...newCategoryBudget,
      ...payload
    }
    return await Budget.save(newCategoryBudget);
  }
  
  getBudget(): string {
    return 'Hello World, I am from the budget service!';
  }
}

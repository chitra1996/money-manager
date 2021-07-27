import {
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Budget } from './budget.entity';
import { IBudgetResponse } from './budget.interface';

@Injectable()
export class BudgetService {
  async createCategoryBudget(
    payload: any,
    user_id: string,
  ): Promise<IBudgetResponse> {
    try {
      const budgetPayload = {
        ...payload,
        user_id,
      };
      const budgetData = await Budget.save(budgetPayload);
      return this.buildIBudgetResponse(budgetData);
    } catch (error) {
      throw new HttpException('Budget data could not be stored in DB', 500);
    }
  }

  async getBudgetById(budgetId: string): Promise<IBudgetResponse> {
    try {
      const budgetData = await Budget.findOne(budgetId);
      return this.buildIBudgetResponse(budgetData);
    } catch (error) {
      throw new HttpException(
        'Budget data could not be found for provided budget ID',
        500,
      );
    }
  }

  async getAllBudgetsByUserId(user_id: string): Promise<IBudgetResponse[]> {
    try {
      const budgetDataArray = await Budget.find({
        user_id,
        deletedAt: null,
      });
      let budgetResponseArray = [];
      for (const budgetData of budgetDataArray) {
        budgetResponseArray.push(this.buildIBudgetResponse(budgetData));
      }
      return budgetResponseArray;
    } catch (error) {
      throw new HttpException(
        'Budget data could not be found for provided user ID',
        500,
      );
    }
  }

  async updateBudgetsById(
    budget_id: string,
    payload: any,
  ): Promise<IBudgetResponse> {
    try {
      const budgetData = await Budget.findOne(budget_id);
      for (const key of Object.keys(payload)) {
        budgetData[key] = payload[key];
      }
      const updatedBudgetData = await Budget.save(budgetData);
      return this.buildIBudgetResponse(updatedBudgetData);
    } catch (error) {
      throw new HttpException(
        'Budget data could not be updated for provided budget ID',
        500,
      );
    }
  }

  async deleteBudgetByBudgetId(budget_id: string): Promise<any> {
    try {
      const budgetData = await Budget.delete(budget_id);
      if (budgetData.affected >= 1) {
        return {
          message: `Successfully deleted data with budget_id: ${budget_id}`,
        };
      } else {
        return {
          message: `Data could not be deleted with budget_id: ${budget_id}`,
        };
      }
    } catch (error) {
      throw new HttpException(
        'Budget data could not be updated for provided budget ID',
        500,
      );
    }
  }

  private buildIBudgetResponse(data: Budget): IBudgetResponse {
    return {
      budget_id: data.id,
      user_id: data.user_id,
      category_id: data.category_id,
      budget: data.budget,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }
}

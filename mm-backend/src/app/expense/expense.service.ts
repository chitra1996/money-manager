import { HttpException, Injectable } from '@nestjs/common';
import { Expense } from './expense.entity';
import { IExpenseResponse } from './expense.interface';

@Injectable()
export class ExpenseService {
  async createExpense(payload: any): Promise<IExpenseResponse> {
    try {
      const expenseData = await Expense.save(payload);
      return this.buildExpenseResponse(expenseData);
    } catch (error) {
      throw new HttpException(
        `Expense data could not be stored in DB. Error: ${error}`,
        500,
      );
    }
  }

  async getExpenseByExpenseId(expense_id: string): Promise<IExpenseResponse> {
    try {
      const expenseData = await Expense.findOne(expense_id);
      return this.buildExpenseResponse(expenseData);
    } catch (error) {
      throw new HttpException(
        `Expense data could not be found in DB. Error: ${error}`,
        500,
      );
    }
  }

  async getExpenseByUserId(user_id: string): Promise<IExpenseResponse[]> {
    try {
      const expenseDataArray = await Expense.find({ user_id });
      let expenseResponseArray = [];
      for (const expenseData of expenseDataArray) {
        expenseResponseArray.push(this.buildExpenseResponse(expenseData));
      }
      return expenseResponseArray;
    } catch (error) {
      throw new HttpException(
        `Expense data could not be found in DB. Error: ${error}`,
        500,
      );
    }
  }

  async updateExpenseByExpenseId(
    expense_id: string,
    payload: any,
  ): Promise<IExpenseResponse> {
    try {
      const expenseData = await Expense.findOne(expense_id);
      for (const key of Object.keys(payload)) {
        expenseData[key] = payload[key];
      }
      const updatedExpenseData = await Expense.save(expenseData);
      return this.buildExpenseResponse(updatedExpenseData);
    } catch (error) {
      throw new HttpException(
        `Expense data could not be updated in DB. Error: ${error}`,
        500,
      );
    }
  }

  async deleteExpenseByExpenseId(expense_id: string): Promise<any> {
    try {
      const expenseData = await Expense.delete(expense_id);
      if (expenseData.affected >= 1) {
        return {
          message: `Successfully deleted data with expense_id: ${expense_id}`,
        };
      } else {
        return {
          message: `Data could not be deleted with expense_id: ${expense_id}`,
        };
      }
    } catch (error) {
      throw new HttpException(
        `Expense data could not be deleted from DB. Error: ${error}`,
        500,
      );
    }
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

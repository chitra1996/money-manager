import {
  Delete,
  Param,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IBudgetRequest, IBudgetResponse } from './budget.interface';
import { BudgetService } from './budget.service';

@UseGuards(JwtAuthGuard)
@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  async createBudget(
    @Req() req: Request,
    @Body('budget') budget: number,
    @Body('category_id') category_id: string,
  ): Promise<any> {
    try {
      const payload: IBudgetRequest = {
        budget,
        category_id,
      };
      return await this.budgetService.createCategoryBudget(
        payload,
        req.user['id'],
      );
    } catch (error) {
      throw error;
    }
  }

  @Get('/')
  async getBudget(
    @Query('budget_id') budget_id: string,
  ): Promise<IBudgetResponse> {
    try {
      return await this.budgetService.getBudgetById(budget_id);
    } catch (error) {
      throw error;
    }
  }

  @Get('/:user_id')
  async getBudgetByUserId(
    @Param('user_id') user_id: string,
  ): Promise<IBudgetResponse[]> {
    try {
      return await this.budgetService.getAllBudgetsByUserId(user_id);
    } catch (error) {
      throw error;
    }
  }

  @Put('/:budget_id')
  async updateBudgetByBudgetId(
    @Param('budget_id') budget_id: string,
    @Req() req: Request,
  ): Promise<IBudgetResponse> {
    try {
      const payload = req.body;
      return await this.budgetService.updateBudgetsById(budget_id, payload);
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:budget_id')
  async deleteBudgetByBudgetId(
    @Param('budget_id') budget_id: string,
  ): Promise<IBudgetResponse> {
    try {
      return await this.budgetService.deleteBudgetByBudgetId(budget_id);
    } catch (error) {
      throw error;
    }
  }
}

import { Delete, Param, Put, Query, Req } from '@nestjs/common';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ICategoryRequest, ICategoryResponse } from './category.interface';
import { CategoryService } from './category.service';

@UseGuards(JwtAuthGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategorycategory(
    @Req() req: Request,
    @Body('budget') budget: number,
    @Body('category_name') category_name: string,
  ): Promise<any> {
    try {
      const payload: ICategoryRequest = {
        budget,
        category_name,
      };
      return await this.categoryService.createCategoryCategory(
        payload,
        req.user['user_id'],
      );
    } catch (error) {
      throw error;
    }
  }

  @Get('/')
  async getCategory(
    @Query('category_id') category_id: string,
  ): Promise<ICategoryResponse> {
    try {
      return await this.categoryService.getCategoryById(category_id);
    } catch (error) {
      throw error;
    }
  }

  @Get('/:user_id')
  async getCategoryByUserId(
    @Param('user_id') user_id: string,
  ): Promise<ICategoryResponse[]> {
    try {
      return await this.categoryService.getAllCategorysByUserId(user_id);
    } catch (error) {
      throw error;
    }
  }

  @Put('/:category_id')
  async updateCategoryByCategoryId(
    @Param('category_id') category_id: string,
    @Req() req: Request,
  ): Promise<ICategoryResponse> {
    try {
      const payload = req.body;
      return await this.categoryService.updateCategorysById(
        category_id,
        payload,
      );
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:category_id')
  async deleteCategoryByCategoryId(
    @Param('category_id') category_id: string,
  ): Promise<ICategoryResponse> {
    try {
      return await this.categoryService.deleteCategoryByCategoryId(category_id);
    } catch (error) {
      throw error;
    }
  }
}

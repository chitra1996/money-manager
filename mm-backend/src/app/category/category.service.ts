import {
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Category } from './category.entity';
import { ICategoryResponse } from './category.interface';

@Injectable()
export class CategoryService {
  async createCategoryCategory(
    payload: any,
    user_id: string,
  ): Promise<ICategoryResponse> {
    try {
      const categoryPayload = {
        ...payload,
        user_id,
      };
      const categoryData = await Category.save(categoryPayload);
      return this.buildCategoryResponse(categoryData);
    } catch (error) {
      throw new HttpException(`Category data could not be stored in DB. Error: ${error}`, 500);
    }
  }

  async getCategoryById(category_id: string): Promise<ICategoryResponse> {
    try {
      const categoryData = await Category.findOne(category_id);
      return this.buildCategoryResponse(categoryData);
    } catch (error) {
      throw new HttpException(
        `Category data could not be found for provided category ID. Error: ${error}`,
        500,
      );
    }
  }

  async getAllCategorysByUserId(user_id: string): Promise<ICategoryResponse[]> {
    try {
      const categoryDataArray = await Category.find({
        user_id,
        deletedAt: null,
      });
      let categoryResponseArray = [];
      for (const categoryData of categoryDataArray) {
        categoryResponseArray.push(this.buildCategoryResponse(categoryData));
      }
      return categoryResponseArray;
    } catch (error) {
      throw new HttpException(
        `Category data could not be found for provided user ID. Error: ${error}`,
        500,
      );
    }
  }

  async updateCategorysById(
    category_id: string,
    payload: any,
  ): Promise<ICategoryResponse> {
    try {
      const categoryData = await Category.findOne(category_id);
      for (const key of Object.keys(payload)) {
        categoryData[key] = payload[key];
      }
      const updatedCategoryData = await Category.save(categoryData);
      return this.buildCategoryResponse(updatedCategoryData);
    } catch (error) {
      throw new HttpException(
        `Category data could not be updated for provided category ID. Error: ${error}`,
        500,
      );
    }
  }

  async deleteCategoryByCategoryId(category_id: string): Promise<any> {
    try {
      const categoryData = await Category.delete(category_id);
      if (categoryData.affected >= 1) {
        return {
          message: `Successfully deleted data with category_id: ${category_id}`,
        };
      } else {
        return {
          message: `Data could not be deleted with category_id: ${category_id}`,
        };
      }
    } catch (error) {
      throw new HttpException(
        `Category data could not be updated for provided category ID. Error: ${error}`,
        500,
      );
    }
  }

  private buildCategoryResponse(data: Category): ICategoryResponse {
    return {
      category_id: data.id,
      user_id: data.user_id,
      category_name: data.category_name,
      budget: data.budget,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }
}

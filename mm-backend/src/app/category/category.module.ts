import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { ValidateCategory } from '../../middlewares/ValidateCategory';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCategory)
      .exclude(
        { path: 'category', method: RequestMethod.GET },
        { path: 'category/:user_id', method: RequestMethod.GET },
        { path: 'category/:id', method: RequestMethod.DELETE },
      )
      .forRoutes(CategoryController);
  }
}

import {
  NestModule,
  MiddlewareConsumer,
  Module,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { ValidateExpense } from '../../middlewares/ValidateRequest/ValidateExpense';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  controllers: [UserController],
  providers: [UserService, AuthService],
  exports: [UserService],
})
export class UserModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .exclude({ path: 'user/login', method: RequestMethod.POST })
      .forRoutes(UserController);
  }
}

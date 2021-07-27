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
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

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
      .exclude(
        { path: 'user/login', method: RequestMethod.POST },
        { path: 'user/logout', method: RequestMethod.POST },
        { path: 'user', method: RequestMethod.GET },
        { path: 'user/:user_id', method: RequestMethod.GET },
        { path: 'user/:user_id', method: RequestMethod.DELETE },
      )
      .forRoutes(UserController);
  }
}

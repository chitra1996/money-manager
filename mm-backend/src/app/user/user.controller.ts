import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createuser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
    @Body('password') password: string,
  ): Promise<any> {
    const payload = {
      name,
      email,
      phone,
      password,
    };

    return await this.userService.createUser(payload);
  }

  @Post('login')
  async login(
    @Body('userEmail') userEmail: string,
    @Body('password') password: string,
  ) {
    try {
      const authToken = await this.userService.login(userEmail, password);
      return {
        authToken,
        expiresIn: '10000s',
        tokenType: 'JWT',
      };
    } catch (error) {
      throw error;
    }
  }
}

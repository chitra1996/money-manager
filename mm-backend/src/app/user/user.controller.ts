import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from './user.entity';
import { IUserResponse } from './user.interface';
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
    try {
      const payload = {
        name,
        email,
        phone,
        password,
      };

      return await this.userService.createUser(payload);
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/all')
  async getAllUsers(): Promise<IUserResponse[]> {
    try {
      return await this.userService.getAllUsers();
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:user_id')
  async getUserById(
    @Param('user_id') user_id: string
  ): Promise<IUserResponse> {
    try {
      return await this.userService.getUserById(user_id);
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:user_id')
  async updateUserById(
    @Param('user_id') user_id: string,
    @Req() req: Request
  ): Promise<IUserResponse> {
    try {
      const payload = req.body;
      return await this.userService.updateUsersById(user_id, payload);
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:user_id')
  async deleteUserById(
    @Param('user_id') user_id: string
  ): Promise<IUserResponse> {
    try {
      return await this.userService.deleteUserById(user_id);
    } catch (error) {
      throw error;
    }
  }

  @Post('login')
  async login(
    @Body('userEmail') userEmail: string,
    @Body('password') password: string,
  ) {
    try {
      const authData = await this.userService.login(userEmail, password);
      return {
        authToken: authData.jwtToken,
        expiresIn: '604800000s',
        userId: authData.userId
      };
    } catch (error) {
      throw error;
    }
  }
}

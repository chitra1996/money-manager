import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async createuser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('phone') phone: string,
    @Body('password') password: string
  ): Promise<any> {
    const payload = {
      name,
      email,
      phone,
      password
    }

    return await this.userService.createUser(payload);
  }

  @Get("/:userId")
  getUser(): string {
    return this.userService.getUser();
  }
}

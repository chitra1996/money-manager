import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { User } from './user.entity';
import { IUserResponse } from './user.interface';

@Injectable()
export class UserService {
  constructor(private authService: AuthService) {}

  async createUser(payload: any): Promise<User> {
    try {
      payload.password = await this.authService.hashPassword(payload.password);
      return await User.save(payload);
    } catch (error) {
      throw new HttpException(
        `User could not be created. Error: ${error}`,
        500,
      );
    }
  }

  async getUserByEmail(user_email: string): Promise<IUserResponse> {
    try {
      const data = await User.findOne({
        email: user_email,
      });
      return this.buildUserResponse(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getUserById(user_id: string): Promise<IUserResponse> {
    try {
      const data = await User.findOne(user_id);
      return this.buildUserResponse(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getAllUsers(): Promise<IUserResponse[]> {
    try {
      const userArray = await User.find();
      let userResponseArray = [];
      for (const userData of userArray) {
        userResponseArray.push(this.buildUserResponse(userData));
      }
      return userResponseArray;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateUsersById(
    user_id: string,
    payload: any,
  ): Promise<IUserResponse> {
    try {
      const userData = await User.findOne(user_id);
      for (const key of Object.keys(payload)) {
        if(key === 'password') {
          userData[key] = await this.authService.hashPassword(payload[key]);
        } else {
          userData[key] = payload[key];
        }
      }
      const updatedUserData = await User.save(userData);
      return this.buildUserResponse(updatedUserData);
    } catch (error) {
      throw new HttpException(
        `User data could not be updated for provided user ID. Error: ${error}`,
        500,
      );
    }
  }
 async deleteUserById(user_id: string): Promise<any> {
    try {
      const categoryData = await User.delete(user_id);
      if (categoryData.affected >= 1) {
        return {
          message: `Successfully deleted data with user_id: ${user_id}`,
        };
      } else {
        return {
          message: `Data could not be deleted with user_id: ${user_id}`,
        };
      }
    } catch (error) {
      throw new HttpException(
        `User data could not be updated for provided category ID. Error: ${error}`,
        500,
      );
    }
  }

  async login(userEmail: string, userPassword: string): Promise<any> {
    const user = await this.getUserByEmail(userEmail);
    if (!user) {
      throw new NotFoundException(
        'Oops.. Seems like your account needs to be created :(',
      );
    }

    const passwordMatches = await this.validatePassword(
      userPassword,
      user.password,
    );

    if (passwordMatches) {
      const jwtToken = await this.authService.generateJwt(user);
      return {
        jwtToken,
        userId: user.user_id
      };
    }
    throw new UnauthorizedException(
      'uh..oh.. Seems like wrong email or password :(',
    );
  }

  private async validatePassword(password: string, storedPasswordHash: string) {
    return await this.authService.comparePasswords(
      password,
      storedPasswordHash,
    );
  }

  private buildUserResponse(data: User): IUserResponse {
    return {
      user_id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }
}

import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private authService: AuthService,
  ) {}

  async createUser(payload: any): Promise<User> {
    payload.password = await this.authService.hashPassword(payload.password);
    return await User.save(payload);
  }

  async getUserByEmail(userEmail: string): Promise<User> {
    try {
      const data = await this.userRepository.findOne({
        email: userEmail,
      });

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getUserById(userId: string): Promise<User> {
    try {
      const data = await this.userRepository.findOne({
        id: userId,
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async login(userEmail: string, userPassword: string): Promise<string> {
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
      return jwtToken;
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
}

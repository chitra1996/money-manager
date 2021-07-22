import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async createUser(payload): Promise<any> {
    let newUser = User.create();
    newUser = {
      ...newUser,
      ...payload
    }
    return await User.save(newUser);
  }

  getUser(): string {
    const data = this.userRepository.find();
    console.log(data)
    return 'Hello World, I am from the user service! I am the data' + data;
  }
}

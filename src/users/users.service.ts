import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
@Dependencies(getModelToken(User.name))
export class UsersService {
  userModel: any;
  constructor(userModel) {
    this.userModel = userModel;
  }

  async getUsers() {
    return await this.userModel.find();
  }

  async getUser(id: string) {
    return await this.userModel.findById(id);
  }

  async createUser(user: CreateUserDto) {
    const newUser = await this.userModel.create(user);
    return newUser;
  }
}

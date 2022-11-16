import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createTaskDto } from 'src/tasks/dto/create-task.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async raed() {
    return await this.userModel.find();
  }

  async readOne(id: string) {
    console.log('shshssh');

    return await this.userModel.findById({ _id: id });
  }

  // async create(user: CreateUserDto) {
  //   const newUser = await this.userModel.create(user);
  //   return newUser;
  // }

  // async update(id: string, update: createTaskDto, who: string) {
  //   return await this.userModel.findOneAndUpdate(
  //     {
  //       _id: id,
  //     },
  //     {
  //       $push: { [who]: update },
  //     },
  //   );
  // }

  // async delete(id: string) {
  //   return await this.userModel.findByIdAndDelete({ _id: id });
  // }
}

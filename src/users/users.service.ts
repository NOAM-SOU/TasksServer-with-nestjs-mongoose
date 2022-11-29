import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { createTaskDto } from 'src/tasks/dto/create-task.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async raed() {
    return await this.userModel.find();
  }

  async readOne(email: string) {
    return await this.userModel.findOne({ email });
  }

  async create(user: CreateUserDto, pass: string) {
    return await this.userModel.create({ ...user, password: pass });
  }

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

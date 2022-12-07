import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { TaskI } from 'src/tasks/interfaces/Task';
import { CreateUserDto } from './dto/create-user.dto';
import { UserI } from './interfaces/User';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async read(): Promise<UserI[]> {
    return await this.userModel.find();
  }

  async readOne(email: string): Promise<UserDocument> {
    return await this.userModel.findOne({ email }).lean();
  }

  async readOneAndPopulate(id: string, field: string): Promise<TaskI[]> {
    return (await this.userModel.findOne({ _id: id }).populate(field)).tasks;
  }

  async create(user: CreateUserDto, pass: string) {
    return await this.userModel.create({ ...user, password: pass });
  }

  async updateNew(id: string, field: string, update: Types.ObjectId) {
    return await this.userModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $push: { [field]: update },
      },
    );
  }

  async updateDel(id: string, field: string, del: Types.ObjectId) {
    return await this.userModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $pull: { [field]: del },
      },
    );
  }

  // async delete(id: string) {
  //   return await this.userModel.findByIdAndDelete({ _id: id });
  // }
}

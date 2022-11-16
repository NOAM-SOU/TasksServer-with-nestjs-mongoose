import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TasksService {
  @Inject(UsersService)
  private usersService: UsersService;
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  // async read() {
  //   return await this.taskModel.find();
  // }

  // async readOne(id: string) {
  //   const tasks = await this.taskModel.findOne({ _id: id });
  //   return `Task: ${tasks}`;
  // }

  // async create(id: string, task: createTaskDto) {
  //   const newTask = await this.taskModel.create({
  //     ...task,
  //     userId: id,
  //   });
  //   const addTaskToUser = await this.usersService.update(id, newTask, 'tasks');

  //   return `new task created ${newTask} and added to user ${addTaskToUser}`;
  // }
}

import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createTaskDto } from './dto/create-task.dto';
import { Task, TaskDocument } from './schemas/task.schema';
import { UsersService } from 'src/users/users.service';
import { TaskI } from './interfaces/Task';

@Injectable()
export class TasksService {
  @Inject(UsersService)
  private usersService: UsersService;
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async read() {
    return await this.taskModel.find();
  }

  async readOne(id: string): Promise<TaskI> {
    return await this.taskModel.findOne({ _id: id });
  }

  async getAllTasks(id: string): Promise<TaskI[]> {
    return await this.usersService.readOneAndPopulate(id, 'tasks');
  }

  async create(
    createTaskDto: createTaskDto,
    id: string,
  ): Promise<TaskDocument> {
    return this.taskModel.create({ ...createTaskDto, userId: id });
  }

  async delete(id: string) {
    return await this.taskModel.findByIdAndDelete({ _id: id });
  }

  async addTask(task: createTaskDto, id: string): Promise<TaskI> {
    const newTask = await this.create(task, id);
    await this.usersService.updateNew(id, 'tasks', newTask._id);
    return await newTask;
  }

  async deleteTask(userId: string, id: string): Promise<TaskI> {
    const taskD = await this.delete(id);
    await this.usersService.updateDel(userId, 'tasks', taskD._id);
    return taskD;
  }

  async updateTask(id: string, task: createTaskDto): Promise<TaskDocument> {
    return await this.taskModel.findByIdAndUpdate({ _id: id }, task, {
      new: true,
    });
  }

  async completedTask(id: string): Promise<TaskI> {
    const task = await this.readOne(id);
    return await this.taskModel.findByIdAndUpdate(
      { _id: id },
      { completed: !task.completed },
      { new: true },
    );
  }
}

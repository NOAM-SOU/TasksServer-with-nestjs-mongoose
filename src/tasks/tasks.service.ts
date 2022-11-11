import { Dependencies, Injectable } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { createTaskDto } from './dto/create-task.dto';
import { Task } from './schemas/task.schema';

@Injectable()
@Dependencies(getModelToken(Task.name))
export class TasksService {
  taskModel: any;
  constructor(taskModel) {
    this.taskModel = taskModel;
  }

  async getTasks() {
    return await this.taskModel.find();
  }

  async getTask(id: string) {
    return await this.taskModel.findById(id);
  }

  async createTask(task: createTaskDto) {
    const newTask = await this.taskModel.create(task);
    return newTask;
  }
}

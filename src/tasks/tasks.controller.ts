import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { TaskI } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Promise<TaskI[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<TaskI> {
    return this.tasksService.getTask(id);
  }

  @Post(':id')
  createTask(@Body() task: createTaskDto): Promise<TaskI> {
    return this.tasksService.createTask(task);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { TaskI } from './interfaces/Task';
import { TasksService } from './tasks.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  getTask(@Param('id') id: string): Promise<TaskI> {
    return this.tasksService.readOne(id);
  }

  @UseGuards(JwtGuard)
  @Get('all/:id')
  getAll(@Param('id') id: string): Promise<TaskI[]> {
    return this.tasksService.getAllTasks(id);
  }

  @UseGuards(JwtGuard)
  @Post(':id')
  addTask(
    @Body() task: createTaskDto,
    @Param('id') id: string,
  ): Promise<TaskI> {
    return this.tasksService.addTask(task, id);
  }

  @UseGuards(JwtGuard)
  @Delete(':userId/:id')
  deleteTask(
    @Param('userId') userId: string,
    @Param('id') id: string,
  ): Promise<TaskI> {
    return this.tasksService.deleteTask(userId, id);
  }

  @UseGuards(JwtGuard)
  @Get('completed/:id')
  completedTask(@Param('id') id: string): Promise<TaskI> {
    return this.tasksService.completedTask(id);
  }
}

import { createTaskDto } from './dto/create-task.dto';
import { TaskI } from './interfaces/Task';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTask(id: string): Promise<TaskI>;
    getAll(id: string): Promise<TaskI[]>;
    addTask(task: createTaskDto, id: string): Promise<TaskI>;
    deleteTask(userId: string, id: string): Promise<TaskI>;
    updateTask(id: string, task: createTaskDto): Promise<TaskI>;
    completedTask(id: string): Promise<TaskI>;
}

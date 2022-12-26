/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { createTaskDto } from './dto/create-task.dto';
import { TaskDocument } from './schemas/task.schema';
import { TaskI } from './interfaces/Task';
export declare class TasksService {
    private taskModel;
    private usersService;
    constructor(taskModel: Model<TaskDocument>);
    read(): Promise<(import("mongoose").Document<unknown, any, TaskI> & TaskI & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    readOne(id: string): Promise<TaskI>;
    getAllTasks(id: string): Promise<TaskI[]>;
    create(createTaskDto: createTaskDto, id: string): Promise<TaskDocument>;
    delete(id: string): Promise<import("mongoose").Document<unknown, any, TaskI> & TaskI & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    addTask(task: createTaskDto, id: string): Promise<TaskI>;
    deleteTask(userId: string, id: string): Promise<TaskI>;
    updateTask(id: string, task: createTaskDto): Promise<TaskDocument>;
    completedTask(id: string): Promise<TaskI>;
}

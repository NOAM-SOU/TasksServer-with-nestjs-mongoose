import { Types } from 'mongoose';
export interface TaskI {
    userId: Types.ObjectId;
    title: string;
    description: string;
    completed: boolean;
}

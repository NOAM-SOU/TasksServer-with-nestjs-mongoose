import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as schema } from 'mongoose';
import { TaskI } from '../interfaces/Task';

export type TaskDocument = HydratedDocument<TaskI>;

@Schema()
export class Task {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  done: boolean;

  @Prop({ type: schema.Types.ObjectId })
  userId: { type: schema.Types.ObjectId; ref: 'User' };
}

export const TaskSchema = SchemaFactory.createForClass(Task);

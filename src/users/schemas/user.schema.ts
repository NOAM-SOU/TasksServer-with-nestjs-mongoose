import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Task } from 'src/tasks/schemas/task.schema';
import { UserI } from '../interfaces/User';

export type UserDocument = HydratedDocument<UserI>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Task' }] })
  tasks: Task[];
}

export const UserSchema = SchemaFactory.createForClass(User);

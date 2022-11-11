import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as schema } from 'mongoose';
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

  @Prop({ type: schema.Types.ObjectId })
  tasks: [{ type: schema.Types.ObjectId; ref: 'Task' }];
}

export const UserSchema = SchemaFactory.createForClass(User);

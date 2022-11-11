import { TaskI } from 'src/tasks/interfaces/Task';

export interface UserI {
  name: string;
  email: string;
  password: string;
  tasks: TaskI[];
}

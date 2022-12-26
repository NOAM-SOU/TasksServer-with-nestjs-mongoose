import { UserDetails } from 'src/users/interfaces/UserDetails';
import { UserDocument } from 'src/users/schemas/user.schema';
export declare function getUser(user: UserDocument): Promise<UserDetails>;

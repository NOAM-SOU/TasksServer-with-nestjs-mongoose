import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserI } from './interfaces/User';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<UserI[]>;
    getUser(email: string): Promise<UserI>;
    deleteUser(id: any): string;
    updateUser(user: CreateUserDto, id: any): string;
}

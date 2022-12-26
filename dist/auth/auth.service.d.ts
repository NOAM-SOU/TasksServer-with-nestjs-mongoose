import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ExistingUserDTO } from 'src/users/dto/existing-user.dto';
import { Token } from 'src/types/token.type';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    register(user: CreateUserDto): Promise<Token>;
    login(user: ExistingUserDTO): Promise<Token>;
}

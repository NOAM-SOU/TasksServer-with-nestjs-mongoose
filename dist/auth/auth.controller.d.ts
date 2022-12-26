import { Token } from 'src/types/token.type';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ExistingUserDTO } from 'src/users/dto/existing-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(user: CreateUserDto): Promise<Token>;
    login(user: ExistingUserDTO): Promise<Token>;
}

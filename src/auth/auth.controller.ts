import { Body, Controller, Post } from '@nestjs/common';
import { Token } from 'src/types/token.type';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ExistingUserDTO } from 'src/users/dto/existing-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() user: CreateUserDto): Promise<Token> {
    return await this.authService.register(user);
  }

  @Post('login')
  async login(@Body() user: ExistingUserDTO) {
    return await this.authService.login(user);
  }
}

import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { comparePass, hashPassword } from 'src/tools/auth.tools';
import { JwtService } from '@nestjs/jwt';
import { getUser } from 'src/tools/user.tools';
import { ExistingUserDTO } from 'src/users/dto/existing-user.dto';
import { Token } from 'src/types/token.type';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(user: CreateUserDto): Promise<Token> {
    const existitngUser = await this.userService.readOne(user.email);
    if (existitngUser) throw new Error('User already exists');
    const hashedPassword = await hashPassword(user.password);
    const newUser = await this.userService.create(user, hashedPassword);
    const jwt = await this.jwtService.signAsync(await getUser(newUser));
    return { token: jwt };
  }

  async login(user: ExistingUserDTO): Promise<Token> {
    const userExisting = await this.userService.readOne(user.email);
    console.log(userExisting);
    if (!user) throw new Error('User not found');
    const passMatch = await comparePass(user.password, userExisting.password);
    if (!passMatch) throw new Error('Wrong password');
    const jwt = await this.jwtService.signAsync(await getUser(userExisting));
    return { token: jwt };
  }
}

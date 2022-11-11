import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserI } from './interfaces/User';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): Promise<UserI[]> {
    return this.usersService.getUsers();
  }
  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserI> {
    return this.usersService.getUser(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDto): Promise<UserI> {
    return this.usersService.createUser(user);
  }
  @Delete(':id')
  deleteUser(@Param('id') id): string {
    console.log(id);

    return `eliminando usuario ${id}`;
  }
  @Put(':id')
  updateUser(@Body() user: CreateUserDto, @Param('id') id): string {
    console.log(user);
    console.log(id);

    return 'actualizando usuario';
  }
}

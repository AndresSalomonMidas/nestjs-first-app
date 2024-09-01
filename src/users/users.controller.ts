import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller()
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('/users')
  getUsers() {
    return this.UsersService.getUsers();
  }

  @Post('/users')
  @UsePipes(new ValidationPipe())
  createUser(@Body() body: CreateUserDto) {
    return this.UsersService.createUser(body);
  }
}

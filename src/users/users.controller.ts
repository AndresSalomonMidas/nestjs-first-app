import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @ApiTags('users')
  @Get('/users')
  getUsers() {
    return this.UsersService.getUsers();
  }

  @ApiTags('users')
  @Post('/users')
  @UsePipes(new ValidationPipe())
  createUser(@Body() body: CreateUserDto) {
    return this.UsersService.createUser(body);
  }
}

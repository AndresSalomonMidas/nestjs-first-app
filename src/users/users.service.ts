import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@mail.com',
      password: '12345',
      age: 40,
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@mail.com',
      password: '12345',
      age: 30,
    },
  ];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push({
      ...user,
      id: this.users.length + 1,
    });

    return user;
  }
}

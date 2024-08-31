import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      userId: 1,
      username: 'John',
      password: 'Doe',
      phone: '1234567890',
    },
    {
      userId: 2,
      username: 'Jane',
      password: 'Doe',
      phone: '1234567890',
    },
  ];

  getUsers() {
    return this.users;
  }
}

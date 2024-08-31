import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  getTasks(): User {
    return { name: 'John', age: 30 };
  }

  createTask() {
    return 'Task created';
  }

  updateTask() {
    return 'Task updated';
  }

  deleteTask() {
    return 'Task deleted';
  }

  patchTask() {
    // ? Update partially
    return 'Task patched';
  }
}

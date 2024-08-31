import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return ['Task 1', 'Task 2', 'Task 3'];
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

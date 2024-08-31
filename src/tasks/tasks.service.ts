import { Injectable, NotFoundException } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find(task => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: any) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
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

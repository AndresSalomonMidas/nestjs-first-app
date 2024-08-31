import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  tasksService: TasksService;

  constructor(taskService: TasksService) {
    this.tasksService = taskService;
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask() {
    return this.tasksService.createTask();
  }

  @Put()
  updateTask() {
    // ? Update completely
    return this.tasksService.updateTask();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch('/tasks')
  patchTask() {
    // ? Update partially
    return this.tasksService.patchTask;
  }
}

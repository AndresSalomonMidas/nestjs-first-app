import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  tasksService: TasksService;

  constructor(taskService: TasksService) {
    this.tasksService = taskService;
  }

  @Get()
  getAllTasks(@Query() query: any) {
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(Number(id));
  }

  @Post()
  createTask(@Body() body: any) {
    return this.tasksService.createTask(body);
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

import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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
  @UsePipes(new ValidationPipe())
  createTask(@Body() body: CreateTaskDto) {
    return this.tasksService.createTask(body);
  }

  @Put()
  updateTask(@Body() body: UpdateTaskDto) {
    // ? Update completely
    return this.tasksService.updateTask(body);
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

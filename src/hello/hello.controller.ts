import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

// This controller is used directly in main module
@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({ message: 'Hello World!' });
  }

  @Get('/not-found')
  @HttpCode(404)
  notFoundPage() {
    return '404 | Not Found';
  }

  @Get('/error')
  @HttpCode(500)
  errorPage() {
    return '500 | Internal Server Error';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + num;
  }

  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    // console.log(typeof status); // 'boolean'
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    // ? ValidateUserPipe transform age to number
    // console.log(typeof query.age); // 'number'
    return `Hello, ${query.name}! You are ${query.age} years old.`;
  }
}

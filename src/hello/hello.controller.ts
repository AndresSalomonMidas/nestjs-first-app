import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

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
}

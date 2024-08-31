import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

// This controller is used directly in main module
@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({ message: 'Hello World!' });
  }
}

import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response } from 'express';

// ? Middlewares are similar to Guards, but not equal
// ? Middlewares are at HTTP level
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.originalUrl);
    next();
  }
}

import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `\x1b[36m${req.method}\x1b[0m \x1b[35m${req.url}\x1b[0m \x1b[32m${res.statusCode}\x1b[0m ${req.originalUrl}\x1b[0m`,
    );
    next();
  }
}

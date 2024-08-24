//  Create a middleware that logs the request method and request path to the console.
//  Use the following format: ${request.method} ${request.path}
//  Use the logger middleware in the app.

import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.path}`);
    next();
  }
}

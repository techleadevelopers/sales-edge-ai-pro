// api/src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Returns a simple welcome message for the API root.
   */
  getHello(): string {
    return 'Welcome to SalesEdge AI API!';
  }
}
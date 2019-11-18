import { Controller, Get } from '@nestjs/common';
import environment from 'src/environment';

@Controller('status')
export class StatusController {
  constructor() {}

  @Get()
  getStatus(): { status: string } {
    return { status: 'success' };
  }

  @Get('/ping')
  ping(): { status: string; payload: any } {
    return { status: 'success', payload: 'pong' };
  }

  @Get('/env')
  getEnv(): { status: string; payload: any } {
    return { status: 'success', payload: environment };
  }
}

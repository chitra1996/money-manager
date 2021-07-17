import { Controller, Get } from '@nestjs/common';

@Controller('healthz')
export class AppController {
  constructor() {}

  @Get()
  healthz() {
    return "OK"
  }
}

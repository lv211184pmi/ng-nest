
import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common'

import { Message } from '@myworkspace/backend-microservices/api-interfaces'
import { AppService } from './app.service'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @Get('hello')
  getData(): Message {
    return this.appService.getData()
  }
}

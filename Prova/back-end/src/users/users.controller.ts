import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  HttpCode,
  Inject,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { REQUEST } from '@nestjs/core';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject(REQUEST) private request: Request,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  async login(@Request() req) {
    const token = await this.authService.login(req.user);
    return { ...req.user, ...token };
  }
  @Post('new')
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  update(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return this.usersService.update(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id) {
    return this.usersService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/info')
  info() {
    return (this.request as any).user;
  }
}

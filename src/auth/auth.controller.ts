import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto, AuthResponse } from './dto/login.dto';
import AuthUser from './auth-user.decorator';
import { User } from '.prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  // Qualquer usuário pode tentar fazer login
  @Post('login')
  login(@Body() data: loginDto): Promise<AuthResponse> {
    return this.service.login(data);
  }
  // Usuário autenticado pode acessar seus dados.
  @Get('me')
  @UseGuards(AuthGuard())
  me(@AuthUser() user: User): User {
    return user;
  }
}

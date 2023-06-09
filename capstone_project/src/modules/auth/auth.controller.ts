import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Hospital } from '../hospital/entities/hospital.entity';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Auth } from './entities/auth.entity';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { RolesGuard } from './roles.guard';

@ApiTags('Login')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({
    type: CreateAuthDto,
    description: 'Login credentials',
  })
  @Post('login')
  async login(@Request() req) {
    return this.authService.generateToken(req.user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('user')
  async getUser(@Request() req): Promise<any> {
    return req.user;
  }
}

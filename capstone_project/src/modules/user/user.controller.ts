import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  async createUser(@Body() createUserRequest: CreateUserDto): Promise<Users> {
    return await this.userService.createUser(createUserRequest);
  }

  @Get(':email')
  async getUser(@Param('email') getUserRequest: string): Promise<Users> {
    return await this.userService.getUserByEmail({ email: getUserRequest });
  }
}

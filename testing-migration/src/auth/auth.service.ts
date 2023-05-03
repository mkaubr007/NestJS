import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

// ? yarn add @nestjs/jwt
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validateUserCreds(email: string, password: string): Promise<any> {
    const user = await this.userService.findUser(email);
    if (!user) throw new BadRequestException();
    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }
    return user;
  }

  generateToken(req: any) {
    return {
      access_token: this.jwtService.sign({ user: req.name, sub: req.id }),
    };
  }
}

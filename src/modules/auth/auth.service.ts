import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../master/user/user.service.js';
import { LoginDto } from './dto/login.dto.js';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginDto: LoginDto) {
    const user = await this.userService.findByUsername(loginDto.username ?? '');
    if (
      user &&
      (await bcrypt.compare(loginDto.password ?? '', user.password ?? ''))
    ) {
      const { password, ...result } = user;
      return {
        user: result,
        token: {
          access_token: this.jwtService.sign(result),
          expires_in: 3600,
          token_type: 'Bearer',
        },
      };
    }
    throw new UnauthorizedException('Invalid username or password');
  }
}

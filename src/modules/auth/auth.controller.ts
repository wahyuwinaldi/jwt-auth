import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';
import { AuthService } from './auth.service.js';
import { Public } from '../../common/decorators/public.decorator.js';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @Public()
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}

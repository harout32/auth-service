import { Controller, Post, Body } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('auth')
export class UserController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
        ) {

    }
    @Post('register')
    async register(@Body() userDto: UserDto): Promise<UserEntity> {
        const user = await this.userService.create(userDto);
        console.log(user);
        return user;
    }

    @Post('login')
    async login (@Body() userDto: UserDto) {
        const user = await this.userService.getUserByUserName(userDto.userName);
        const result = await this.authService.login(user);
        return result;
    }

}

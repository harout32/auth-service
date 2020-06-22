import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/dto/user.dto';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
        ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        // const user = await this.usersService.findOne(username);
        // if (user && user.password === pass) {
        //     const { password, ...result } = user;
        //     return result;
        // }
        // return null;
        return true;
    }

    async login(user: UserEntity) {
        const payload = { username: user.userName, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

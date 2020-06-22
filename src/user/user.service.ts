import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,) {

    }
    async create(user: UserDto) {
        const createdUser = new UserEntity();
        createdUser.email = user.email;
        createdUser.userName = user.userName;
        return this.usersRepository.save(createdUser);
    }

    async getUserByUserName(userName: string) {
        const result = await this.usersRepository.findOne({
            userName,
        });
        return result;
    }

}

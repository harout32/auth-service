import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class UserDto {
    @ApiProperty()
    @IsString()
    @Length(3, 15, {
        message: 'User name should be between 3 - 15 characters',
    })
    userName: string;

    @ApiProperty()
    @IsEmail(undefined, {
        message: 'Email is not real!',
    })
    email: string;

    @ApiProperty()
    @IsString()
    @Length(3, 15, {
        message: 'Password should be between 3 - 15 characters',
    })
    password: string


}
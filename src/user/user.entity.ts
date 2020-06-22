
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'user'
})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: '100',
        unique: true,
    })
    userName: string;

    @Column({
        length: '100',
        unique: true,
    })
    email: string;
}
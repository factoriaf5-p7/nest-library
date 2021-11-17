import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    photo: string

}
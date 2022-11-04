import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name: "tb_usuario"})
    export class Usuario{
        @PrimaryGeneratedColumn()
        id:number

        @IsNotEmpty()
        @MaxLength(100)
        @Column({length: 100, nullable: false})
        @ApiProperty()
        nome:string

        @IsEmail()
        @Column({length: 255, nullable: false, unique:true})
        @ApiProperty({example:"email@email.com.br"})
        usuario:string 

        
        @IsNotEmpty()
        @MinLength(6)
        @Column({length: 255, nullable: false})
        @ApiProperty()
        senha:string
        
        @MaxLength(5000)
        @Column({length: 5000, nullable: true})
        @ApiProperty()
        foto:string

        @ApiProperty({ type: () => Usuario})
        @OneToMany(() => Postagem, (postagem) => postagem.usuario)
        postagem: Postagem[]

    }
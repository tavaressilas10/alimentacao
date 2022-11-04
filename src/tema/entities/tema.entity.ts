import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import {Entity, PrimaryGeneratedColumn,Column,OneToMany} from "typeorm";

@Entity({name: "tb_tema"})
    export class Tema{


        @PrimaryGeneratedColumn()
        @ApiProperty()
        id:number

//
        @IsNotEmpty()
        @MaxLength(50)
        @Column({length:50, nullable:false})
        @ApiProperty()
        temaPrincipal:string

        @IsNotEmpty()
        @MaxLength(100)
        @Column({length:100, nullable:false})
        @ApiProperty()
        descricao:string

        @ApiProperty({ type: () => Postagem})
        @OneToMany(() => Postagem, (Postagem) => Postagem.tema)
        postagem: Postagem[]
    }
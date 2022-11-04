import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import{Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";

@Entity({name: "tb_postagem"})
export class Postagem{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100,nullable:false})
    @ApiProperty()
    titulo:string

    @MaxLength(1800)
    @IsNotEmpty()
    @Column({length: 1800, nullable: false})
    @ApiProperty()
    texto: string

    @MaxLength(4000)
    @Column({length: 4000, nullable: true})
    @ApiProperty()
    foto: string

    @MaxLength(4000)
    @Column({length: 4000, nullable: true})
    @ApiProperty()
    linkOrg: string

    @IsNotEmpty()
    @UpdateDateColumn()
    @ApiProperty()
    data: Date
    
    @ApiProperty({ type: () => Tema})
    @ManyToOne (() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ApiProperty({ type: () => Usuario})
    @ManyToOne (() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario

}
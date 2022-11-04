import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";

@Injectable()
export class TemaService {
    constructor(
        @InjectRepository(Tema)
        private TemaRepository: Repository<Tema>
    ){}

//Get All
        async findAll(): Promise<Tema[]>{
            return await this.TemaRepository.find({
                relations: {
                    postagem: true
                }
            })
        }
//Get ID
        async findById(id:number): Promise<Tema>{
            let tema = await this.TemaRepository.findOne({
                where: {id},
                relations: {
                    postagem: true
                }
            })
            if (!tema)
                throw new HttpException('Tema não existe', HttpStatus.NOT_FOUND)
                return tema
        }

//Get temaPrincipal
        async findByTema(temaPrincipal:string): Promise<Tema[]>{
            return await this.TemaRepository.find({
                where: {
                    temaPrincipal: ILike(`%${temaPrincipal}%`)
            },
            relations: {
                postagem: true
            }
        })
    }

//Post
        async create(tema:Tema): Promise<Tema>{
            return this.TemaRepository.save(tema)
        }

//Put
        async update(tema:Tema): Promise<Tema>{
            let buscarTema = await this.findById(tema.id)

            if(!buscarTema || !tema.id)
            throw new HttpException('Tema não existe',HttpStatus.NOT_FOUND)

            return await this.TemaRepository.save(tema)
        }

//delet
        async delete(id:number): Promise<DeleteResult>{
            let buscarTema = await this.findById(id)

            if(!buscarTema)
                throw new HttpException('Tema não existe',HttpStatus.NOT_FOUND)

                return await this.TemaRepository.delete(id)
        }
}
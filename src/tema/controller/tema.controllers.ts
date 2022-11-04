import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";

@ApiTags('Tema')
@UseGuards(JwtAuthGuard)
@Controller("/tema")
@ApiBearerAuth()
export class TemaController{
    constructor(private readonly TemaService: TemaService){}


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tema[]>{
        return this.TemaService.findAll()
    }


    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id:number): Promise<Tema>{
        return this.TemaService.findById(id)
    }


    @Get('/Tema/:tema')
    @HttpCode(HttpStatus.OK)
    findByTema(@Param('tema')tema:string): Promise<Tema[]>{
        return this.TemaService.findByTema(tema)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() tema: Tema): Promise<Tema>{
        return this.TemaService.create(tema)
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() tema: Tema): Promise<Tema>{
        return this.TemaService.update(tema)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.TemaService.delete(id)
    }
}
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('pessoas')
export class PessoasController {
  constructor(private readonly pessoasService: PessoasService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDto) {
    return await this.pessoasService.create(createPessoaDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.pessoasService.findAll();
  }
}

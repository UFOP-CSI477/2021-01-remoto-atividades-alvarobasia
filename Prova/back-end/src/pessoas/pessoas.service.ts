import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';

@Injectable()
export class PessoasService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPessoaDto: CreatePessoaDto) {
    return await this.prisma.pessoas.create({
      data: createPessoaDto,
    });
  }

  async findAll() {
    const persons = await this.prisma.pessoas.findMany();

    return persons.sort((a, b) => {
      if (a.nome < b.nome) return -1;
      if (a.nome > b.nome) return 1;
      return 0;
    });
  }
}

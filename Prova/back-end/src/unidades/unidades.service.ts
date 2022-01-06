import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';

@Injectable()
export class UnidadesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUnidadeDto: CreateUnidadeDto) {
    return this.prisma.unidades.create({
      data: createUnidadeDto,
    });
  }

  async findAll() {
    const un = await this.prisma.unidades.findMany();
    return un.sort((a, b) => {
      if (a.nome < b.nome) return -1;
      if (a.nome > b.nome) return 1;
      return 0;
    });
  }

  async remove(id: number) {
    const regis = await this.prisma.registros.findMany({
      where: {
        Unidades: {
          id,
        },
      },
    });
    if (regis.length > 0) return;

    return await this.prisma.unidades.delete({
      where: {
        id,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateVacinaDto } from './dto/create-vacina.dto';
import { UpdateVacinaDto } from './dto/update-vacina.dto';

@Injectable()
export class VacinasService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createVacinaDto: CreateVacinaDto) {
    return await this.prisma.vacinas.create({
      data: createVacinaDto,
    });
  }

  async findAll() {
    const vac = await this.prisma.vacinas.findMany();

    return vac.sort((a, b) => {
      if (a.nome < b.nome) return -1;
      if (a.nome > b.nome) return 1;
      return 0;
    });
  }

  update(id: number, updateVacinaDto: UpdateVacinaDto) {
    return this.prisma.vacinas.update({
      where: { id },
      data: updateVacinaDto,
    });
  }
}

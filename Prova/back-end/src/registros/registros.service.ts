import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';

@Injectable()
export class RegistrosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRegistroDto: CreateRegistroDto) {
    return await this.prisma.registros.create({
      data: {
        ...createRegistroDto,
        Pessoas: {
          create: {
            nome: createRegistroDto.pessoa.nome,
            data_nascimento: createRegistroDto.pessoa.data_nascimento,
            cpf: createRegistroDto.pessoa.cpf,
          },
        },
        Vacinas: {
          create: {
            nome: createRegistroDto.vacina.nome,
            doses: createRegistroDto.vacina.doses,
            fabricante: createRegistroDto.vacina.fabricante,
            pais: createRegistroDto.vacina.pais,
          },
        },
        Unidades: {
          create: {
            nome: createRegistroDto.unidade.nome,
            bairro: createRegistroDto.unidade.bairro,
            cidade: createRegistroDto.unidade.cidade,
            data_nascimento: createRegistroDto.unidade.data_nascimento,
            estado: createRegistroDto.unidade.estado,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.registros.findMany({
      include: {
        Pessoas: true,
        Vacinas: true,
        Unidades: true,
      },
    });
  }

  async update(id: number, updateRegistroDto: UpdateRegistroDto) {
    return await this.prisma.registros.update({
      where: { id },
      data: {
        ...updateRegistroDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.registros.delete({
      where: { id },
    });
  }
}

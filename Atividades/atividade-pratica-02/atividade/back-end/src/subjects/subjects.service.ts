import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSubjectDto: CreateSubjectDto) {
    return await this.prisma.subjects.create({
      data: {
        name: createSubjectDto.name,
        price: createSubjectDto.price,
      },
    });
  }

  async findAll() {
    return await this.prisma.subjects.findMany();
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return await this.prisma.subjects.update({
      where: { id },
      data: {
        name: updateSubjectDto.name,
        price: updateSubjectDto.price,
      },
    });
  }

  async remove(id: number) {
    const protocols = await this.prisma.requests.findMany({
      where: {
        subject: { id },
      },
    });

    if (protocols.length > 0) {
      throw new Error('Há protocolos vinculados a este tipo de protocolo');
    }
    return this.prisma.subjects.delete({
      where: { id },
    });
  }
}

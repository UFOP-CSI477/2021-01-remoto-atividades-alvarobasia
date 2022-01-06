import { Module } from '@nestjs/common';
import { VacinasService } from './vacinas.service';
import { VacinasController } from './vacinas.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VacinasController],
  providers: [VacinasService, PrismaService],
})
export class VacinasModule {}

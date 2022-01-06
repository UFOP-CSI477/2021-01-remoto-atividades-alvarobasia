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
import { UnidadesService } from './unidades.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createUnidadeDto: CreateUnidadeDto) {
    return await this.unidadesService.create(createUnidadeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.unidadesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.unidadesService.remove(+id);
  }
}

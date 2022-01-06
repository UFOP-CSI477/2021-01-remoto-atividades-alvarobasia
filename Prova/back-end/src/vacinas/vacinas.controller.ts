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
import { VacinasService } from './vacinas.service';
import { CreateVacinaDto } from './dto/create-vacina.dto';
import { UpdateVacinaDto } from './dto/update-vacina.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('vacinas')
export class VacinasController {
  constructor(private readonly vacinasService: VacinasService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createVacinaDto: CreateVacinaDto) {
    return await this.vacinasService.create(createVacinaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.vacinasService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVacinaDto: UpdateVacinaDto,
  ) {
    return await this.vacinasService.update(+id, updateVacinaDto);
  }
}

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
import { RegistrosService } from './registros.service';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('registros')
export class RegistrosController {
  constructor(private readonly registrosService: RegistrosService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createRegistroDto: CreateRegistroDto) {
    return await this.registrosService.create(createRegistroDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.registrosService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRegistroDto: UpdateRegistroDto,
  ) {
    return await this.registrosService.update(+id, updateRegistroDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.registrosService.remove(+id);
  }
}

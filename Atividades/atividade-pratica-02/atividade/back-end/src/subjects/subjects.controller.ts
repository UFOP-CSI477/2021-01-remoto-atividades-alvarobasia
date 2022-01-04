import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Get()
  async findAll() {
    return await this.subjectsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() subject: CreateSubjectDto) {
    return await this.subjectsService.create(subject);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  async update(@Param('id') id: number, subject: UpdateSubjectDto) {
    return await this.subjectsService.update(id, subject);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      return this.subjectsService.remove(id);
    } catch (e) {
      return {
        error: e.message,
      };
    }
  }
}

import { CreatePessoaDto } from 'src/pessoas/dto/create-pessoa.dto';
import { CreateUnidadeDto } from 'src/unidades/dto/create-unidade.dto';
import { CreateVacinaDto } from 'src/vacinas/dto/create-vacina.dto';

export class CreateRegistroDto {
  data: Date;
  pessoa: CreatePessoaDto;
  unidade: CreateUnidadeDto;
  vacina: CreateVacinaDto;
}

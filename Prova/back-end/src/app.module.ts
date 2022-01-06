import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { UnidadesModule } from './unidades/unidades.module';
import { VacinasModule } from './vacinas/vacinas.module';
import { RegistrosModule } from './registros/registros.module';

@Module({
  imports: [
    UsersModule,
    PessoasModule,
    UnidadesModule,
    VacinasModule,
    RegistrosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

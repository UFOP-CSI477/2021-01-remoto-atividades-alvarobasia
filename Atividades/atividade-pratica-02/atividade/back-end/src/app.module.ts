import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RequestsModule } from './requests/requests.module';
import { SubjectsModule } from './subjects/subjects.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, RequestsModule, SubjectsModule, AuthModule],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  create({ email, nome, password }: CreateUserDto) {
    const user = {
      nome,
      email,
      password,
    };
    return this.prisma.users.create({ data: user });
  }

  findOneByEmail(email: string) {
    const user = this.prisma.users.findUnique({ where: { email } });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { id: +id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({ where: { id: +id } });
  }
}

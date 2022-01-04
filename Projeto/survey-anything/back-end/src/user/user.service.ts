import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create({ email, name, password }: CreateUserDto) {
    const user = {
      email,
      name,
      password,
    };
    return this.prisma.user.create({ data: user });
  }

  findOneByEmail(email: string) {
    const user = this.prisma.user.findUnique({ where: { email } });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: +id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id: +id } });
  }
}

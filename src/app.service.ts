import { Injectable, OnModuleInit } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './user/dto/create-user.dto';
import { UserService } from './user/user.service';
import { Role } from './libs/enum';
import { FilmsService } from './films/films.service';
import * as dotenv from 'dotenv';

dotenv.config(); 


@ApiTags('status')
@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly userService: UserService,
    private readonly filmService: FilmsService) {}

  async onModuleInit() {
    await this.createAdminUserIfNotExists();
  }

  private async createAdminUserIfNotExists() {
    await this.filmService.manualFilmSynchronization()
    const admin = await this.userService.findOneByEmail('admin@example.com');
    if (!admin) {
      const adminDto: CreateUserDto = {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        role: Role.Admin,
        firstName: 'Admin',
        lastName: 'User',
      };

      await this.userService.create(adminDto);
      console.log('Admin user created');
    } else {
      console.log('Admin user already exists');
    }
  }
}

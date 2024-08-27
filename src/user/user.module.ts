import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserModelName, UserSchema } from './schemas/user.schema';
import { AuthLibModule } from 'src/libs/auth/auth-lib.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: UserModelName, schema: UserSchema }]),
    AuthLibModule
  ],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}

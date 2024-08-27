import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthLibModule } from 'src/libs/auth/auth-lib.module';
import { UserModelName, UserSchema } from 'src/user/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: UserModelName, schema: UserSchema }]),
    AuthLibModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

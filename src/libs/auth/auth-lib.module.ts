import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthLibService } from './auth-lib.service';
import { UserModelName, UserSchema } from 'src/user/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config(); 

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES,
      },
    }),
    MongooseModule.forFeature([{ name: UserModelName, schema: UserSchema }]),
  ],
  providers: [AuthLibService, JwtStrategy],
  exports: [AuthLibService],
})
export class AuthLibModule {}

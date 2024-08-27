/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthLibService } from 'src/libs/auth/auth-lib.service';
import { errorsDictionary } from 'src/libs/errors-dictionary';
import { PayloadTokenUsers } from 'src/libs/interfaces';
import { IUser, UserModelName } from 'src/user/schemas/user.schema';
import * as ms from 'ms';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Role } from '../libs/enum';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InputUserDto } from '../user/dto/input-user.dto'
import * as dotenv from 'dotenv';

dotenv.config(); 




@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModelName) private userModel: Model<IUser>,
    private authLibService: AuthLibService
  ){}

  async logIn(email:string, password:string){
    const userFound = await  this.userModel.findOne({email: email });

    if (!userFound){
      throw new NotFoundException(errorsDictionary.userNotFound);
    }

    if (!userFound.active){
      throw new BadRequestException(errorsDictionary.activateUser)
    }
    
    await this.authLibService.validatePassword(password, userFound.password)

    const payload: PayloadTokenUsers ={
      id: userFound.id,
      email: userFound.email,
      role: userFound.role
    }

    let accessToken = await this.authLibService.createTokenUsers(payload, {
      expiresIn: process.env.JWT_EXPIRES,
    })

    let refreshToken = await this.authLibService.createTokenUsers(payload, {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES,
    })

    const time = ms(process.env.JWT_EXPIRES);
    const expiresIn = time / 1000;

    return {
      accessToken,
      expiresIn,
      refreshToken
    } 
  }

  async signUp(createUserDto: InputUserDto) {
    try {

      const emailFound = await this.userModel.findOne({email:createUserDto.email});

      if (emailFound) {
        throw new BadRequestException(errorsDictionary.emailError);
      }

      const hashedPassword = await this.authLibService.hash(createUserDto.password);
      const userToCreate: CreateUserDto = {
        ...createUserDto,
        password: hashedPassword,
        active: true,
        role: Role.Viewer,
      };
  
      await this.userModel.create(userToCreate);
  
      return "The user has been successfully created.";

    } catch (error) {
      console.log("--->",error);
      return error;
    }
  }
}

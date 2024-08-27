import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser, UserModelName} from './schemas/user.schema';
import { errorsDictionary } from '../libs/errors-dictionary';
import { AuthLibService } from '../libs/auth/auth-lib.service';
import { Role } from 'src/libs/enum';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { plainToInstance } from 'class-transformer';
import { UserViewDto, UserViewListDto } from './dto/user-view.dto';
import { InputUserDto } from './dto/input-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModelName) private userModel: Model<IUser>,
    private authLibService: AuthLibService
  ){}
  async create(createUserDto: InputUserDto) {
    try {
      const emailFound = await this.userModel.findOne({email:createUserDto.email});

      if (emailFound) {
        throw new BadRequestException(errorsDictionary.emailError);
      }

      const userToCreate: CreateUserDto = {
        ...createUserDto,
        password:  await this.authLibService.hash(createUserDto.password),
        active: true,
        role: Role.Admin,
      };

      await this.userModel.create(userToCreate);
      return "The user has been successfully created."
    } catch (error) {
      console.log("--->",error);
      return error;
    }
  }

  async findAll(active: boolean): Promise<UserViewListDto[]> {
      const users = await this.userModel
        .find({ active: active })
        .select('-password -__v -firstName -lastName -deletedAt -createdAt -updatedAt')
        .lean();
  
      return plainToInstance(UserViewListDto, users);
  }
  
  async findOne(id: string) {
    let user = await this.userModel
    .findOne({ _id: id })
    .select('-password -__v')
    .lean({
      virtuals: true,
      getters: true,
     });
  
    if (!user) {
      throw new NotFoundException(errorsDictionary.userNotFound);
    }
  
    return plainToInstance(UserViewDto, user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let user = await this.userModel.findOne({_id: id})

    if(!user){
      throw new NotFoundException(errorsDictionary.userNotFound);
    }

    if (updateUserDto.password) {
      updateUserDto.password = await this.authLibService.hash(
        updateUserDto.password,
        10,
      );
    }

     await this.userModel.updateOne({ _id: id }, updateUserDto);
     return 'The user has been successfully updated.'
  }

  async remove(id: string) {
    let user = await this.userModel.findOne({_id: id})

    if (!user) {
      throw new NotFoundException(errorsDictionary.userNotFound);
    }
    await this.userModel.updateOne({ _id: id }, {active: false});
    return 'The user has been successfully deleted.'
  }

  async findOneByEmail(email: string): Promise<IUser | null> {
    return this.userModel.findOne({ email }).exec();
  }
}

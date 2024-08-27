import {
    IsBoolean,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
  import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Role } from '../../libs/enum';
import { CreateUserDto } from './create-user.dto';
import { Transform } from 'class-transformer';

export class UserViewDto extends PartialType(CreateUserDto) {

    @ApiProperty()
    @IsString()
    @Transform(({ value }) => value.toString())  
    _id: string;

    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty({type: 'string', description: "A role value between 'Admin' and 'Viewer'"})
    @IsNotEmpty({ each: true })
    @IsEnum(Role, { each: true })
    role: Role;

    @ApiProperty()
    @IsString()
    firstName
    
    @ApiProperty()
    @IsString()
    lastName: string; 
  
    @IsOptional()
    @IsBoolean()
    active?: boolean;
  }

  export class UserViewListDto{

    @ApiProperty()
    @IsString()
    @Transform(({ value }) => value.toString())  
    _id: string;

    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty({type: 'string', description: "A role value between 'Admin' and 'Viewer'"})
    @IsNotEmpty({ each: true })
    @IsEnum(Role, { each: true })
    role: Role;
  
    @IsOptional()
    @IsBoolean()
    active?: boolean;
  }

  
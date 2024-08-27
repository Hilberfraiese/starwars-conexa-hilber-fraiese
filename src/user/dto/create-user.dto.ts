import {
    IsBoolean,
    IsEnum,
    IsOptional,
    IsString,
    Matches,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../libs/enum';
  
  export class CreateUserDto {

    @ApiProperty()
    @IsString()
    email: string;
      
    @ApiProperty()
    @IsString()
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,64}$/, {
      message:
        'Password must be between 8 and 64 characters long with 1 special character, 1 number and capital character each',
    })
    password: string;

    @ApiProperty({type: 'string', description: "A role value between 'Admin' and 'Viewer'"})
    @IsOptional()
    @IsEnum(Role, { each: true })
    role: Role;

    @ApiProperty()
    @IsString()
    firstName: string;
    
    @ApiProperty()
    @IsString()
    lastName: string;
  
    @IsOptional()
    @IsBoolean()
    active?: boolean;
  }

  
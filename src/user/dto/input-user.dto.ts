import {
    IsBoolean,
    IsOptional,
    IsString,
    Matches,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  export class InputUserDto {

    @ApiProperty()
    @IsString()
    email: string;
      
    @ApiProperty()
    @IsString()
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,64}$/, {
      message:
        'Password must be between 8 and 64 characters long with 1 special character and capital character each',
    })
    password: string;

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

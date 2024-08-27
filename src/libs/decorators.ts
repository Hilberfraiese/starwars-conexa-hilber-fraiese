import { SetMetadata } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export const USER_ROLE_KEY = 'Role';

export const UserRole = (role: string) => SetMetadata(USER_ROLE_KEY, role);

export class IdParamRequestDTO {
    @ApiProperty({
      description: 'Id',
      type: String,
      example: '66ccec94ce56ccd0dd47c946',
    })
    @IsNotEmpty()
    @MinLength(24)
    @MaxLength(24)
    @IsString()
    id: string;
  }
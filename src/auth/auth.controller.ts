/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/login.dto';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InputUserDto } from 'src/user/dto/input-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ description: 'This endpoint is used to login users.', summary: "Login user"})
  @ApiOkResponse({description: 'The user has logged in successfully.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({ status: 404, description: 'User is deleted.' })
  logIn(@Body() logInDto: LogInDto ){
    const { email, password } = logInDto 
    return this.authService.logIn(email, password)
  }

  @Post('sign-up')
  @ApiOperation({ description: 'This endpoint is used to create Viewer type users.', summary: "Create viewer user"})
  @ApiOkResponse({description: 'The user has been successfully created.' })
  @ApiResponse({ status: 404, description: 'Email in use, please enter an available one' })
  create(@Body() createUserDto: InputUserDto) {
    return this.authService.signUp(createUserDto);
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, BadRequestException, NotFoundException} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Role } from '../libs/enum';
import { CanAccessRoles, JwtAuthGuard, RolesAuthGuard } from '../libs/auth/strategies/auth.guard';
import { UserViewDto } from './dto/user-view.dto';
import { InputUserDto } from './dto/input-user.dto';
import { IdParamRequestDTO } from '../libs/decorators';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth('bearer')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiSecurity('bearer')
  @UseGuards(JwtAuthGuard, RolesAuthGuard)
  @CanAccessRoles(Role.Admin)
  @ApiOperation({ description: 'This endpoint is used to create Admin type users.', summary: "Create admin user - Exclusive for Admin"})
  @ApiOkResponse({ description: 'The user has been successfully created.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden resource.' })
  @ApiResponse({ status: 404, description: 'Email in use, please enter an available one.' })
  create(@Body() createUserDto: InputUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiSecurity('bearer')
  @UseGuards(JwtAuthGuard, RolesAuthGuard)
  @CanAccessRoles(Role.Admin)
  @ApiOperation({ description: 'This endpoint is used to get all users', summary: "Get all users - Exclusive for Admin"})
  @ApiOkResponse({ description: 'List of users returned successfully.', type: UserViewDto})
  @ApiResponse({ status: 401, description: 'Unauthorized.'})
  @ApiResponse({ status: 403, description: 'Forbidden resource.' })
  findAll(@Query("active") active:boolean ) {
    return this.userService.findAll(active);
  }

  @Get(':id')
  @ApiSecurity('bearer')
  @UseGuards(JwtAuthGuard, RolesAuthGuard)
  @CanAccessRoles(Role.Admin)
  @ApiOperation({ description: 'This endpoint is used to get a specific user.', summary: "Get user details - Exclusive for Admin"})
  @ApiOkResponse({ description: 'User returned successfully.', type: CreateUserDto})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden resource.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  findOne(@Param() {id}: IdParamRequestDTO) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiSecurity('bearer')
  @UseGuards(JwtAuthGuard, RolesAuthGuard)
  @CanAccessRoles(Role.Admin)
  @ApiOperation({ description: 'This endpoint is used to update user.', summary: 'Update user - Exclusive for Admin' })
  @ApiParam({ name: 'id', description: 'Update user' })
  @ApiOkResponse({description: 'The user has been successfully updated.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden resource.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  update(@Param() {id}: IdParamRequestDTO, @Body() updateUserDto: UpdateUserDto) {
    console.log(id)
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiSecurity('bearer')
  @UseGuards(JwtAuthGuard, RolesAuthGuard)
  @CanAccessRoles(Role.Admin)
  @ApiOperation({  description: 'This endpoint is used to delete user.', summary: 'Delete user - Exclusive for Admin' })
  @ApiParam({ name: 'id', description: 'Delete user' })
  @ApiOkResponse({description: 'The user has been successfully deleted.'})
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 403, description: 'Forbidden resource.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  remove(@Param() {id}: IdParamRequestDTO) {
    return this.userService.remove(id);
  }
}

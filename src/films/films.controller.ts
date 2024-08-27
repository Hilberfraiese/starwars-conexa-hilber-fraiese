import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { FilmsService } from './films.service';
import {  ApiOkResponse, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { FilmDto } from './dto/film.dto';
import { ViewGeneralFilmDto, ViewOneFilmDescriptionDto } from './dto/view-general-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { CanAccessRoles, JwtAuthGuard, RolesAuthGuard } from '../libs/auth/strategies/auth.guard';
import { Role } from '../libs/enum'
import { IdParamRequestDTO } from '../libs/decorators';

@ApiTags('films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

 @Get()
 @ApiOperation({ description: 'This endpoint is used to get all films', summary: "Get all films"})
 @ApiOkResponse({ description: 'List of films returned successfully.',type: [ViewGeneralFilmDto]})
 @ApiResponse({ status: 404, description: 'Film not found.' })
 async getAllFilms(){
  let response = await this.filmsService.getAllFilms()
  return response
 }

 @Get('manual-films-synchronization')
 @ApiSecurity('bearer')
 @UseGuards(JwtAuthGuard, RolesAuthGuard)
 @CanAccessRoles(Role.Admin)
 @ApiOperation({ description: 'This endpoint is used to synchronize the films from the API with those from the DB', summary: "Synchronize data - Exclusive for Admin"})
 @ApiOkResponse({ description: 'Records successfully synchronized.'})
 @ApiResponse({ status: 401, description: 'Unauthorized.' })
 @ApiResponse({ status: 403, description: 'Forbidden resource.' })
 @ApiResponse({ status: 404, description: 'Error updating records.' })
 manualFilmSynchronization(){
  return this.filmsService.manualFilmSynchronization()
 }

 @Get(':id')
 @ApiSecurity('bearer')
 @UseGuards(JwtAuthGuard, RolesAuthGuard)
 @CanAccessRoles(Role.Viewer)
 @ApiOperation({ description: ' This endpoint is used to get a specific film with more details', summary: "Get one film - Exclusive for Regular user"})
 @ApiOkResponse({ description: 'Film returned successfully.',type: ViewOneFilmDescriptionDto})
 @ApiResponse({ status: 401, description: 'Unauthorized.' })
 @ApiResponse({ status: 403, description: 'Forbidden resource.' })
 @ApiResponse({ status: 404, description: 'Film not found.' })
 async getFilm(@Param() {id}: IdParamRequestDTO){
  let response = await this.filmsService.getOneFilm(id)
  return response
 }

 @Post()
 @ApiSecurity('bearer')
 @UseGuards(JwtAuthGuard, RolesAuthGuard)
 @CanAccessRoles(Role.Admin)
 @ApiOperation({ description: ' This endpoint is used to create a film', summary: "Create films - Exclusive for Admin"})
 @ApiOkResponse({ description: 'Film create successfully.'}) 
 @ApiResponse({ status: 401, description: 'Unauthorized.' })
 @ApiResponse({ status: 403, description: 'Forbidden resource.' })
 async createFilm(@Body() filmDto: FilmDto){
 await this.filmsService.createFilm(filmDto);
 return 'Film created successfully'
 }

 @Delete(':id')
 @ApiSecurity('bearer')
 @UseGuards(JwtAuthGuard, RolesAuthGuard)
 @CanAccessRoles(Role.Admin)
 @ApiOperation({ description: '  This endpoint is used to delete a film created by an Admin', summary: "Delete films - Exclusive for Admin"})
 @ApiOkResponse({ description: 'Film deleted successfully.'})
 @ApiResponse({ status: 400, description: 'Films that are not locally created cannot be deleted or edited.' })
 @ApiResponse({ status: 401, description: 'Unauthorized.' })
 @ApiResponse({ status: 403, description: 'Forbidden resource.' })
 @ApiResponse({ status: 404, description: 'The requested film was not found.' })
 async deleteFilm(@Param() {id}: IdParamRequestDTO){
  await this.filmsService.deleteFilm(id);
  return 'Film deleted successfully'
 }
 
 @Patch(':id')
 @ApiSecurity('bearer')
 @UseGuards(JwtAuthGuard, RolesAuthGuard)
 @CanAccessRoles(Role.Admin)
 @ApiOperation({ description: 'This endpoint is used to update a film created by an Admin', summary: "Update films- Exclusive for Admin"})
 @ApiOkResponse({ description: 'Film update successfully.'})
 @ApiResponse({ status: 400, description: 'Films that are not locally created cannot be deleted or edited.' })
 @ApiResponse({ status: 401, description: 'Unauthorized.' })
 @ApiResponse({ status: 403, description: 'Forbidden resource.' })
 @ApiResponse({ status: 404, description: 'Film not found.' })
 async updateFilm(@Param() {id}: IdParamRequestDTO, @Body() filmDto: UpdateFilmDto){
  await this.filmsService.updateFilm(id, filmDto);
  return 'Film update successfully'
  }
}

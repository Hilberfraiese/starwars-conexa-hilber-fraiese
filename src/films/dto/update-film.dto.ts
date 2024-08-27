import { IsString, IsNumber, IsOptional, IsArray, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CharacterDto, PlanetsDto, SpeciesDto, StarshipsDto, VehiclesDto } from './view-general-film.dto';

export class UpdateFilmDto {

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  _id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  episode_id?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  opening_crawl?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  director?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  producer?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  release_date?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  created?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  edited?: string;

  @ApiProperty({ required: false })
  @IsUrl()
  @IsOptional()
  url?: string;

  @ApiProperty({ type: [CharacterDto], required: false })
  @IsArray()
  @IsOptional()
  characters?: CharacterDto[];

  @ApiProperty({ type: [PlanetsDto], required: false })
  @IsArray()
  @IsOptional()
  planets?: PlanetsDto[];

  @ApiProperty({ type: [StarshipsDto], required: false })
  @IsArray()
  @IsOptional()
  starships?: StarshipsDto[];

  @ApiProperty({ type: [VehiclesDto], required: false })
  @IsArray()
  @IsOptional()
  vehicles?: VehiclesDto[];

  @ApiProperty({ type: [SpeciesDto], required: false })
  @IsArray()
  @IsOptional()
  species?: SpeciesDto[];
}

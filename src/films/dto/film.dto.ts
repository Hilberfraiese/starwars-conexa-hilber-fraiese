import { IsString, IsNumber, IsArray, IsUrl, IsDateString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CharacterDto, PlanetsDto, SpeciesDto, StarshipsDto, VehiclesDto } from './view-general-film.dto';

export class FilmDto {
  
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNumber()
  episode_id: number;

  @ApiProperty()
  @IsString()
  opening_crawl: string;

  @ApiProperty()
  @IsString()
  director: string;

  @ApiProperty()
  @IsString()
  producer: string;

  @ApiProperty()
  @IsString()
  release_date: string;

  @ApiProperty()
  @IsDateString()
  created: Date;

  @ApiProperty()
  @IsString()
  edited: Date;

  @ApiProperty()
  @IsUrl()
  url: string;

  @ApiProperty({ type:CharacterDto, isArray: true })
  @IsArray()
  characters: CharacterDto[];

  @ApiProperty({ type:PlanetsDto, isArray: true })
  @IsArray()
  planets: PlanetsDto[];

  @ApiProperty({ type:StarshipsDto, isArray: true })
  @IsArray()
  starships: StarshipsDto[];

  @ApiProperty({ type:VehiclesDto, isArray: true })
  @IsArray()
  vehicles: VehiclesDto[];

  @ApiProperty({ type:SpeciesDto, isArray: true })
  @IsArray()
  species: SpeciesDto[];

  @IsBoolean()
  isApi: boolean = true;
}
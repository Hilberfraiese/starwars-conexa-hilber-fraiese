import { IsString, IsNumber, IsArray, IsUrl, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class ViewGeneralFilmDto {

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toString())  
  _id: string;
    
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
  @IsString()
  created: string;

  @ApiProperty()
  @IsString()
  edited: string;

  @ApiProperty()
  @IsUrl()
  url: string;
}

export class CharacterDto {
  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toString())  
  _id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  height: string;

  @ApiProperty()
  @IsString()
  mass: string;

  @ApiProperty()
  @IsString()
  hair_colors: string;

  @ApiProperty()
  @IsString()
  skin_color: string;

  @ApiProperty()
  @IsString()
  eye_color: string;

  @ApiProperty()
  @IsString()
  birth_year: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsUrl()
  homeworld: string;

  @ApiProperty()
  @IsString()
  created: string;

  @ApiProperty()
  @IsString()
  edited: string;

  @ApiProperty()
  @IsUrl()
  url: string;
}

export class SpeciesDto {
  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toString())  
  _id: string;

  @ApiProperty()
  @IsString()
  average_height: string;

  @ApiProperty()
  @IsString()
  average_lifespan: string;

  @ApiProperty()
  @IsString()
  classification: string;

  @ApiProperty()
  @IsString()
  created: string;

  @ApiProperty()
  @IsString()
  edited: string;

  @ApiProperty()
  @IsString()
  eye_colors: string;

  @ApiProperty()
  @IsString()
  hair_colors: string;

  @ApiProperty()
  @IsUrl()
  homeworld: string;

  @ApiProperty()
  @IsString()
  language: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  skin_colors: string;

  @ApiProperty()
  @IsUrl()
  url: string;
}

export class StarshipsDto {

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toString())  
  _id: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  MGLT?: string;

  @ApiProperty()
  @IsString()
  cargo_capacity: string;

  @ApiProperty()
  @IsString()
  consumables: string;

  @ApiProperty()
  @IsString()
  cost_in_credits: string;

  @ApiProperty()
  @IsString()
  created: string;

  @ApiProperty()
  @IsString()
  crew: string;

  @ApiProperty()
  @IsString()
  edited: string;

  @ApiProperty()
  @IsString()
  hyperdrive_rating: string;

  @ApiProperty()
  @IsString()
  length: string;

  @ApiProperty()
  @IsString()
  manufacturer: string;

  @ApiProperty()
  @IsString()
  max_atmosphering_speed: string;

  @ApiProperty()
  @IsString()
  model: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  passengers: string;

  @ApiProperty()
  @IsString()
  starship_class: string;

  @ApiProperty()
  @IsString()
  url: string;
}

export class VehiclesDto {
  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toString())  
  _id: string;

  @ApiProperty()
  @IsString()
  cargo_capacity: string;

  @ApiProperty()
  @IsString()
  consumables: string;

  @ApiProperty()
  @IsString()
  cost_in_credits: string;

  @ApiProperty()
  @IsString()
  created: string;

  @ApiProperty()
  @IsString()
  crew: string;

  @ApiProperty()
  @IsString()
  edited: string;

  @ApiProperty()
  @IsString()
  length: string;

  @ApiProperty()
  @IsString()
  manufacturer: string;

  @ApiProperty()
  @IsString()
  max_atmosphering_speed: string;

  @ApiProperty()
  @IsString()
  model: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  passengers: string;

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsString()
  vehicle_class: string;
}

export class PlanetsDto {
  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toString())  
  _id: string;

  @ApiProperty()
  @IsString()
  climate: string;

  @ApiProperty()
  @IsString()
  created: string;

  @ApiProperty()
  @IsString()
  diameter: string;

  @ApiProperty()
  @IsString()
  edited: string;

  @ApiProperty()
  @IsString()
  gravity: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  orbital_period: string;

  @ApiProperty()
  @IsString()
  population: string;

  @ApiProperty()
  @IsString()
  rotation_period: string;

  @ApiProperty()
  @IsString()
  surface_water: string;

  @ApiProperty()
  @IsString()
  terrain: string;

  @ApiProperty()
  @IsString()
  url: string;
}


export class ViewOneFilmDescriptionDto {

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.toString())  
  _id: string;

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
  @IsString()
  created: string;

  @ApiProperty()
  @IsString()
  edited: string;

  @ApiProperty()
  @IsUrl()
  url: string;

  @ApiProperty({ type: [CharacterDto] })
  @IsArray()
  characters: CharacterDto[];

  @ApiProperty({ type: [PlanetsDto] })
  @IsArray()
  planets: PlanetsDto[];

  @ApiProperty({ type: [StarshipsDto]})
  @IsArray()
  starships: StarshipsDto[];

  @ApiProperty({ type: [VehiclesDto] })
  @IsArray()
  vehicles: VehiclesDto[];

  @ApiProperty({ type: [SpeciesDto]})
  @IsArray()
  species: SpeciesDto[];
}

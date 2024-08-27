import { Schema, Document } from 'mongoose';
import { SpeciesSchema, VehicleSchema, CharacterSchema, StarshipSchema, IPlanet, ISpecies, IVehicle, ICharacter, IStarship, PlanetSchema } from './films-properties.schema';


export interface IFilm extends Document {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: ICharacter[];
  planets: IPlanet[];
  starships: IStarship[];
  vehicles: IVehicle[];
  species: ISpecies[];
  created: string;
  edited: string;
  url: string;
  isApi: boolean;
  createdAt: Date,
  updatedAt: Date
}

export const FilmSchema = new Schema<IFilm>({
  title: { type: String, required: true },
  episode_id: { type: Number, required: true, unique: true},
  opening_crawl: { type: String, required: true },
  director: { type: String, required: true },
  producer: { type: String, required: true },
  release_date: { type: String, required: true },
  characters: [CharacterSchema],
  planets: [PlanetSchema],
  starships: [StarshipSchema],
  vehicles: [VehicleSchema],
  species: [SpeciesSchema],
  created: { type: String, required: true },
  edited: { type: String, required: true },
  url: { type: String, required: true },
  isApi: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const FilmModelName = 'Film';
export default FilmSchema;

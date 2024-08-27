import { Schema, Document, Types } from 'mongoose';

export interface IPlanet extends Document {
  _id: Types.ObjectId;
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export const PlanetSchema = new Schema<IPlanet>({
  _id: { type: Schema.Types.ObjectId, auto: true },
  climate: { type: String, required: true },
  created: { type: String, required: true },
  diameter: { type: String, required: true },
  edited: { type: String, required: true },
  gravity: { type: String, required: true },
  name: { type: String, required: true },
  orbital_period: { type: String, required: true },
  population: { type: String, required: true },
  rotation_period: { type: String, required: true },
  surface_water: { type: String, required: true },
  terrain: { type: String, required: true },
  url: { type: String, required: true },
});

export interface ISpecies extends Document {
  _id: Types.ObjectId;
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld?: string;
  language: string;
  name: string;
  skin_colors: string;
  url: string;
}

export const SpeciesSchema = new Schema<ISpecies>({
  _id: { type: Schema.Types.ObjectId, auto: true },
  average_height: { type: String, required: true },
  average_lifespan: { type: String, required: true },
  classification: { type: String, required: true },
  created: { type: String, required: true },
  edited: { type: String, required: true },
  eye_colors: { type: String, required: true },
  hair_colors: { type: String, required: true },
  homeworld: { type: String, required: false },
  language: { type: String, required: true },
  name: { type: String, required: true },
  skin_colors: { type: String, required: true },
  url: { type: String, required: true },
});

export interface IVehicle extends Document {
  _id: Types.ObjectId;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  name: string;
  passengers: string;
  url: string;
  vehicle_class: string;
}

export const VehicleSchema = new Schema<IVehicle>({
  _id: { type: Schema.Types.ObjectId, auto: true },
  cargo_capacity: { type: String, required: true },
  consumables: { type: String, required: true },
  cost_in_credits: { type: String, required: true },
  created: { type: String, required: true },
  crew: { type: String, required: true },
  edited: { type: String, required: true },
  length: { type: String, required: true },
  manufacturer: { type: String, required: true },
  max_atmosphering_speed: { type: String, required: true },
  name: { type: String, required: true },
  passengers: { type: String, required: true },
  url: { type: String, required: true },
  vehicle_class: { type: String, required: true },
});

export interface ICharacter extends Document {
  _id: Types.ObjectId;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  created: string;
  edited: string;
  url: string;
}

export const CharacterSchema = new Schema<ICharacter>({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  height: { type: String, required: true },
  mass: { type: String, required: true },
  hair_color: { type: String, required: true },
  skin_color: { type: String, required: true },
  eye_color: { type: String, required: true },
  birth_year: { type: String, required: true },
  gender: { type: String, required: true },
  homeworld: { type: String, required: false },
  created: { type: String, required: true },
  edited: { type: String, required: true },
  url: { type: String, required: true },
});

export interface IStarship extends Document {
  _id: Types.ObjectId;
  MGLT?: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  name: string;
  passengers: string;
  starship_class: string;
  url: string;
}

export const StarshipSchema = new Schema<IStarship>({
  _id: { type: Schema.Types.ObjectId, auto: true },
  MGLT: { type: String },
  cargo_capacity: { type: String, required: true },
  consumables: { type: String, required: true },
  cost_in_credits: { type: String, required: true },
  created: { type: String, required: true },
  crew: { type: String, required: true },
  edited: { type: String, required: true },
  hyperdrive_rating: { type: String, required: true },
  length: { type: String, required: true },
  manufacturer: { type: String, required: true },
  max_atmosphering_speed: { type: String, required: true },
  name: { type: String, required: true },
  passengers: { type: String, required: true },
  starship_class: { type: String, required: true },
  url: { type: String, required: true },
});

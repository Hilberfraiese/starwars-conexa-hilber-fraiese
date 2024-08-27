import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilmModelName, IFilm } from './schemas/films.schema'; 
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import { plainToInstance } from 'class-transformer';
import { PlanetsDto, ViewGeneralFilmDto, ViewOneFilmDescriptionDto } from './dto/view-general-film.dto';
import {CharacterDto, SpeciesDto, StarshipsDto, VehiclesDto} from './dto/view-general-film.dto'
import { FilmDto } from './dto/film.dto';
import { errorsDictionary } from '../libs/errors-dictionary';
import { UpdateFilmDto } from './dto/update-film.dto';
import * as dotenv from 'dotenv';

dotenv.config(); 


@Injectable()
export class FilmsService {
  constructor(
    @InjectModel(FilmModelName) private readonly filmModel: Model<IFilm>) {}

  async getAllFilms() {
    const films = await this.filmModel.find()
    .select({
      _id: 1,
      title: 1,
      episode_id: 1,
      opening_crawl: 1,
      director: 1,
      producer: 1,
      release_date: 1,
      created: 1,
      edited: 1,
      url: 1,
      isApi: 1,
      })
    .lean({
        virtuals: true,
        getters: true,
      });
     
    const sortedFilms = films.sort((a, b) => a.episode_id - b.episode_id);
  
    const filmDtos = plainToInstance(ViewGeneralFilmDto, sortedFilms);
  
    return filmDtos;
  }

  async getOneFilm(id:string): Promise<ViewOneFilmDescriptionDto>  {
    let film : ViewOneFilmDescriptionDto = await this.filmModel.findOne({_id:id})
      .lean({
        virtuals: true,
        getters: true,
      })

    if (!film) {
        throw new NotFoundException(errorsDictionary.filmNotFound);
    }

    let cleanFilm = plainToInstance(ViewOneFilmDescriptionDto, film);
    
    cleanFilm.characters = plainToInstance(CharacterDto, film.characters);
    cleanFilm.species = plainToInstance(SpeciesDto, film.species);
    cleanFilm.starships = plainToInstance(StarshipsDto, film.starships);
    cleanFilm.vehicles = plainToInstance(VehiclesDto, film.vehicles);
    cleanFilm.planets =  plainToInstance(PlanetsDto, film.planets);
    return cleanFilm
  }

  async manualFilmSynchronization() {
    try {
        const response = await axios.get(`${process.env.STAR_WARS_API}/films/`);
        const allApiFilms = response.data.results;

        const peopleResponse = await axios.get(`${process.env.STAR_WARS_API}/people/`);
        const people = peopleResponse.data.results;

        const speciesResponse = await axios.get(`${process.env.STAR_WARS_API}/species/`);
        const species = speciesResponse.data.results;

        const responseStarships = await axios.get(`${process.env.STAR_WARS_API}/starships/`);
        const starships = responseStarships.data.results;

        const responseVehicles = await axios.get(`${process.env.STAR_WARS_API}/vehicles/`);
        const vehicles = responseVehicles.data.results;

        const responsePlanets = await axios.get(`${process.env.STAR_WARS_API}/planets/`);
        const planets = responsePlanets.data.results;

        const formaterFilms = await Promise.all(allApiFilms.map(async film => {
            let responseCharacters = await this.mapAndCleanApiData(film.characters, people);
            film.characters = plainToInstance(CharacterDto, responseCharacters);

            let responseSpecies = await this.mapAndCleanApiData(film.species, species);
            film.species = plainToInstance(SpeciesDto, responseSpecies);

            let responseStarships = await this.mapAndCleanApiData(film.starships, starships);
            film.starships = plainToInstance(StarshipsDto, responseStarships);

            let responseVehicles = await this.mapAndCleanApiData(film.vehicles, vehicles);
            film.vehicles = plainToInstance(VehiclesDto, responseVehicles);

            let responsePlanets = await this.mapAndCleanApiData(film.planets, planets);
            film.planets = plainToInstance(PlanetsDto, responsePlanets);

            film.isApi = true;
            return film;
        }));

        const operations = formaterFilms.map(film => ({
            updateOne: {
                filter: { episode_id: film.episode_id },
                update: { $set: film },
                upsert: true
            }
        }));

        await this.filmModel.bulkWrite(operations);

        return "Records successfully synchronized";

    } catch (error) {
        console.error('Error updating records:', error);
        throw new BadRequestException(errorsDictionary.updateFilmsError);
    }
}

  @Cron(CronExpression.EVERY_8_HOURS)
  async automaticFilmSynchronization() {
    try {
      const response = await axios.get(`${process.env.STAR_WARS_API}/films/`);
      const allApiFilms = response.data.results;

      const peopleResponse = await axios.get(`${process.env.STAR_WARS_API}/people/`);
      const people = peopleResponse.data.results;

      const speciesResponse = await axios.get(`${process.env.STAR_WARS_API}/species/`);
      const species = speciesResponse.data.results;

      const responseStarships = await axios.get(`${process.env.STAR_WARS_API}/starships/`);
      const starships = responseStarships.data.results;

      const responseVehicles = await axios.get(`${process.env.STAR_WARS_API}/vehicles/`);
      const vehicles = responseVehicles.data.results;

      const formaterFilms = await Promise.all(allApiFilms.map(async film => {
          let responseCharacters = await this.mapAndCleanApiData(film.characters, people);
          film.characters = plainToInstance(CharacterDto, responseCharacters);

          let responseSpecies = await this.mapAndCleanApiData(film.species, species);
          film.species = plainToInstance(SpeciesDto, responseSpecies);

          let responseStarships = await this.mapAndCleanApiData(film.starships, starships);
          film.starships = plainToInstance(StarshipsDto, responseStarships);

          let responseVehicles = await this.mapAndCleanApiData(film.vehicles, vehicles);
          film.vehicles = plainToInstance(VehiclesDto, responseVehicles);
          film.isApi = true;
          return film;
      }));

      const operations = formaterFilms.map(film => ({
          updateOne: {
              filter: { episode_id: film.episode_id },
              update: { $set: film },
              upsert: true
          }
      }));

      await this.filmModel.bulkWrite(operations);
      console.log("Records successfully synchronized at: ", new Date())
      return "Records successfully synchronized";

  } catch (error) {
      console.error('Error updating records:', error);
      throw new BadRequestException(errorsDictionary.updateFilmsError);
  }
  }

  async mapAndCleanApiData(apiData, filmData) {

    const updatedData = apiData.map(dataUrl =>
      filmData.find(data => data.url === dataUrl)
    ).filter(data => data !== undefined);

    return updatedData;
  }

  createFilm(filmDto : FilmDto){
    filmDto.isApi = false;
    return this.filmModel.create(filmDto);
  }
 
  async deleteFilm(id:string){
    try {
      const deletedFilm = await this.filmModel.findByIdAndDelete(id);

      if (!deletedFilm) {
        throw new NotFoundException(errorsDictionary.filmNotFound);
      }
      if(deletedFilm.isApi){
        throw new BadRequestException(errorsDictionary.filmOriginApiError);
      }
      return `Film ${id} removed successfully`;
    } catch (err) {
      throw err;
    }
  }

  async updateFilm(id: string, filmDto: UpdateFilmDto){
    try {
      const updatedFilm = await this.filmModel.findByIdAndUpdate(id, filmDto, { new: true });

      if (!updatedFilm) {
        throw new NotFoundException(errorsDictionary.filmNotFound);
      }

      if(updatedFilm.isApi){
        throw new BadRequestException(errorsDictionary.filmOriginApiError);
      }

      return updatedFilm;

    } catch (err) {
      throw err;
    }
  }
}



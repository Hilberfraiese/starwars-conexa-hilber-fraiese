import { Test } from "@nestjs/testing";
import { FilmsController } from "../../../src/films/films.controller";
import { FilmsService } from "../../../src/films/films.service";
import { filmStub, updateFilmStub} from "./stub/film.stub";
import { FilmDto } from "src/films/dto/film.dto";
import { UpdateFilmDto } from "src/films/dto/update-film.dto";

jest.mock('../../../src/films/films.service')

describe("UserController", () =>{
    let filmsController : FilmsController;
    let filmsService: FilmsService;


    beforeEach(async () =>{
        const module = await Test.createTestingModule({
            controllers:[FilmsController],
            providers:[FilmsService]
        }).compile()

        filmsController = module.get<FilmsController>(FilmsController)
        filmsService = module.get<FilmsService>(FilmsService)
        jest.clearAllMocks();
    })

 describe("findOne", ()=> {
    let user;
    beforeEach( async () =>{
        user = await filmsController.getFilm({id:"66ccec94ce56ccd0dd47c946"})
    })

    test('then it should call filmsService.findOne', () =>{
        expect(filmsService.getOneFilm).toHaveBeenCalledWith (filmStub()._id)
    })
 })

 describe("findAll", ()=> {
    let user;
    beforeEach( async () =>{
        user = await filmsController.getAllFilms()
    })

    test('then it should call filmsService.findAll', () =>{
        expect(filmsService.getAllFilms).toHaveBeenCalledWith()
    })
 })
 describe("create", ()=> {
    let film;
    let newFilm : FilmDto = filmStub()
    
    beforeEach( async () =>{
        film = await filmsController.createFilm(newFilm)
    })

    test('then it should call filmsService.create', () =>{
        expect(filmsService.createFilm).toHaveBeenCalledWith(newFilm)
    })
 })

 describe('update', () => {
    let film;
  
    beforeEach(async () => {
      const data: UpdateFilmDto = {
        title: "Rogue One",
        episode_id: 6
      };
  
      film = await filmsController.updateFilm({id: filmStub()._id}, data);
    });
  

    test('then it should return the film', () => {
      expect(film).toEqual('Film update successfully');
    });
  });

  
  describe('remove', () => {
    let film;

    beforeEach(async () => {
        film = await filmsController.deleteFilm({id: filmStub()._id});
    });

    test('then it should call userService.remove', () => {
      expect(filmsService.deleteFilm).toBeCalledWith(filmStub()._id);
    });

    test('then it should return the user', () => {
      expect(film).toEqual("Film deleted successfully");
    });
  });
})
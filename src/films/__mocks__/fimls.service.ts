import { filmStub, updateFilmStub} from "../../../test/unit/films/stub/film.stub";

export const FilmsService = jest.fn().mockReturnValue({
    createFilm: jest.fn().mockReturnValue( filmStub()),
    getAllFilms: jest.fn().mockReturnValue([ filmStub()]),
    getFilm: jest.fn().mockReturnValue( filmStub()),
    updateFilm: jest.fn().mockReturnValue( updateFilmStub()),
    deleteFilm: jest.fn().mockReturnValue( filmStub())
})
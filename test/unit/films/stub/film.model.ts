import { MockModel } from "test/unit/database/mock.model";
import { filmStub, SimpleFilm } from "./film.stub"

export class UserModel extends MockModel<SimpleFilm> {
    entityStub = filmStub(); 
}

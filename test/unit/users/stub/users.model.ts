import { MockModel } from "test/unit/database/mock.model";
import { SimpleUser, userStub } from "./users.stub"

export class UserModel extends MockModel<SimpleUser> {
    entityStub = userStub(); 
}
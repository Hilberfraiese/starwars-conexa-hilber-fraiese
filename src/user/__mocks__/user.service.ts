import { userStub, userStubRemove } from "../../../test/unit/users/stub/users.stub";

export const UserService = jest.fn().mockReturnValue({
    create: jest.fn().mockReturnValue( userStub()),
    findAll: jest.fn().mockReturnValue([ userStub()]),
    findOne: jest.fn().mockReturnValue( userStub()),
    update: jest.fn().mockReturnValue( userStub()),
    remove: jest.fn().mockReturnValue( userStubRemove())
})
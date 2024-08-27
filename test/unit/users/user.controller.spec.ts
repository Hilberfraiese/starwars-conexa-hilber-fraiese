import { Test } from "@nestjs/testing";
import { UserController } from "../../../src/user/user.controller";
import { UserService } from "../../../src/user/user.service";
import { userStub, userStubRemove, userStubUpdate } from "./stub/users.stub";
import { UpdateUserDto } from "src/user/dto/update-user.dto";

jest.mock('../../../src/user/user.service')

describe("UserController", () =>{
    let userController : UserController;
    let userService: UserService;


    beforeEach(async () =>{
        const module = await Test.createTestingModule({
            controllers:[UserController],
            providers:[UserService]
        }).compile()

        userController = module.get<UserController>(UserController)
        userService = module.get<UserService>(UserService)
        jest.clearAllMocks();
    })

 describe("findOne", ()=> {
    let user;
    beforeEach( async () =>{
        user = await userController.findOne({id: "66cbf41337799ad499ce3ca9"})
    })

    test('then it should call userService.findOne', () =>{
        expect(userService.findOne).toHaveBeenCalledWith (userStub()._id)
    })
 })

 describe("findAll", ()=> {
    let user;
    beforeEach( async () =>{
        user = await userController.findAll(true)
    })

    test('then it should call userService.findAll', () =>{
        expect(userService.findAll).toHaveBeenCalledWith(userStub().active)
    })
 })
 describe("create", ()=> {
    let user;
    let newUser = userStub()
    beforeEach( async () =>{
        user = await userController.create(newUser)
    })

    test('then it should call userService.create', () =>{
        expect(userService.create).toHaveBeenCalledWith(newUser)
    })
 })

 describe('update', () => {
    let user;
  
    beforeEach(async () => {
      const data: UpdateUserDto = {
        firstName: "Hilber Elias",
        lastName: "Fraiese Marino"
      };
  
      user = await userController.update({id : userStub()._id}, data);
      user.firstName = data.firstName;
      user.lastName = data.lastName;
    });
  
    let expectedUpdate = userStubUpdate()

    test('then it should return the user', () => {
      expect(user).toEqual(expectedUpdate);
    });
  });

  
  describe('remove', () => {
    let user;

    beforeEach(async () => {
        user = await userController.remove({id:userStub()._id});
        user.active=false
    });

    test('then it should call userService.remove', () => {
      expect(userService.remove).toBeCalledWith(userStub()._id);
    });

    test('then it should return the user', () => {
      expect(user).toEqual(userStubRemove());
    });
  });
})
import { Role } from "../../../../src/libs/enum";

export type SimpleUser = {
    _id: string;
    email: string;
    password: string;
    role: Role;
    firstName: string;
    lastName: string;
    active: boolean;
    accessToken: string;
    refreshToken: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
  };
  

export const userStub = (): SimpleUser  => {
    return {
    _id : "66cbf41337799ad499ce3ca9",
    email : "hilber@email.com",
    password : "Hilber09!",
    role : Role.Admin,
    firstName : "Hilber",
    lastName : "Fraiese",
    active : true,
    accessToken : "",
    refreshToken : "",
    createdAt : new Date("2024-08-26T18:52:06.149Z"),
    updatedAt : new Date("2024-08-26T18:52:06.149Z"),
    deletedAt : null
    }
}


export const userStubUpdate = (): SimpleUser  => {
    return {
    _id : "66cbf41337799ad499ce3ca9",
    email : "hilber@email.com",
    password : "Hilber09!",
    role : Role.Admin,
    firstName : "Hilber Elias",
    lastName : "Fraiese Marino",
    active : true,
    accessToken : "",
    refreshToken : "",
    createdAt : new Date("2024-08-26T18:52:06.149Z"),
    updatedAt : new Date("2024-08-26T18:52:06.149Z"),
    deletedAt : null
    }
}

export const userStubRemove = (): SimpleUser  => {
    return {
    _id : "66cbf41337799ad499ce3ca9",
    email : "hilber@email.com",
    password : "Hilber09!",
    role : Role.Admin,
    firstName : "Hilber",
    lastName : "Fraiese",
    active : false,
    accessToken : "",
    refreshToken : "",
    createdAt : new Date("2024-08-26T18:52:06.149Z"),
    updatedAt : new Date("2024-08-26T18:52:06.149Z"),
    deletedAt : null
    }
}

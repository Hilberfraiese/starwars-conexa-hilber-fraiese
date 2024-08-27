export abstract class MockModel<T>{
    
    protected abstract entityStub: T;

    constructor(createEntityData: T){
        this.constructorSpy(createEntityData)
    }

    constructorSpy(_createEntityData: T): void{}

     async findOne(): Promise<T>{
        return this.entityStub;
     }

     async findAll(): Promise<T[]>{
        return [this.entityStub];
     }

     async create(): Promise<T>{
        return this.entityStub;
     }

     async findOneAndUpdate(): Promise<T>{
        return this.entityStub;
     }

     async findOneAndDelete(): Promise<T>{
        return this.entityStub;
     }

     async update(): Promise<T>{
        return this.entityStub;
     }

    
}
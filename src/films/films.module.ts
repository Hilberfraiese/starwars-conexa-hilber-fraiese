import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import  { FilmModelName, FilmSchema } from './schemas/films.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: FilmModelName, schema: FilmSchema }]),
  ],
  controllers: [FilmsController],
  providers: [FilmsService],
  exports: [FilmsService]
})
export class FilmsModule {}

/* eslint-disable prettier/prettier */
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no declaradas en el DTO
      forbidNonWhitelisted: true, // Lanza un error si se encuentran propiedades no permitidas
      transform: true, // Habilita la transformación durante la validaciónon: true
    }),
  );

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Api-Conexa-test')
    .setDescription('Api for Conexa Challenge, by Hilber Fraiese')
    .addTag('CONEXA-CHALLENGE')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();

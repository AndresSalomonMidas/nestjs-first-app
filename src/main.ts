import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ? Validation Pipe for all routes
  // ? With this is not necessary to validate in any controller
  await app.useGlobalPipes(
    new ValidationPipe({
      // ? Remove fields that are not in the DTO
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder().setTitle('Cats example').setDescription('The cats API description').setVersion('1.0').addTag('cats').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // ? Enable cors
  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}

bootstrap();

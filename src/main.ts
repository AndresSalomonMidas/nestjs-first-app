import { NestFactory } from '@nestjs/core';
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

  await app.listen(3000);
}

bootstrap();

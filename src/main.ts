import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('discord');

  await app.listen(3002, '0.0.0.0');
}
bootstrap();

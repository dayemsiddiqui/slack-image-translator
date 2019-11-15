import { NestFactory } from '@nestjs/core';
import environment from './environment';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.port);
}
bootstrap();

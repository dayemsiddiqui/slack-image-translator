import { NestFactory } from '@nestjs/core';
import environment from './environment';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Image Translator')
    .setDescription('Image Translator API Description')
    .setVersion('1.0')
    .addTag('image-translator')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(environment.port);
}
bootstrap();

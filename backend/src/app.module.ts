import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageTranslatorController } from './image-translator/image-translator.controller';

@Module({
  imports: [],
  controllers: [AppController, ImageTranslatorController],
  providers: [AppService],
})
export class AppModule {}

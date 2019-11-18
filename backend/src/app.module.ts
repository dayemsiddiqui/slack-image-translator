import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageTranslatorController } from './image-translator/image-translator.controller';
import { StatusController } from './status/status.controller';
import { SharedController } from './shared/shared.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ImageTranslatorController,
    StatusController,
    SharedController,
  ],
  providers: [AppService],
})
export class AppModule {}

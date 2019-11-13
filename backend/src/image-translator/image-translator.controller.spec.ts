import { Test, TestingModule } from '@nestjs/testing';
import { ImageTranslatorController } from './image-translator.controller';

describe('ImageTranslator Controller', () => {
  let controller: ImageTranslatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageTranslatorController],
    }).compile();

    controller = module.get<ImageTranslatorController>(ImageTranslatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TrabaloController } from './trabalo.controller';

describe('TrabaloController', () => {
  let controller: TrabaloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrabaloController],
    }).compile();

    controller = module.get<TrabaloController>(TrabaloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

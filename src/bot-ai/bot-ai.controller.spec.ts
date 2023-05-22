import { Test, TestingModule } from '@nestjs/testing';
import { BotAiController } from './bot-ai.controller';

describe('BotAiController', () => {
  let controller: BotAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BotAiController],
    }).compile();

    controller = module.get<BotAiController>(BotAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

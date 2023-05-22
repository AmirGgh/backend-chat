import { Test, TestingModule } from '@nestjs/testing';
import { BotAiService } from './bot-ai.service';

describe('BotAiService', () => {
  let service: BotAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotAiService],
    }).compile();

    service = module.get<BotAiService>(BotAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

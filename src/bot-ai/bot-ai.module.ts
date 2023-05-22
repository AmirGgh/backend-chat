import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BotAiController } from './bot-ai.controller';
import { BotAIService, } from './bot-ai.service';
import { BotAI, BotAISchema } from './bot-ai.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BotAI.name, schema: BotAISchema }]),
  ],
  controllers: [BotAiController],
  providers: [BotAIService],
})
export class BotAiModule { }

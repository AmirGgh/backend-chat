import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BotAI } from './bot-ai.schema'; // Import the BotAI model

@Injectable()
export class BotAIService {
    constructor(
        @InjectModel(BotAI.name) private readonly botModel: Model<BotAI>,
    ) { }

    async createBotAI(botData: Partial<BotAI>): Promise<BotAI> {
        const bot = new this.botModel(botData);
        return bot.save();
    }

    async getAllBotAI(): Promise<BotAI[]> {
        return this.botModel.find().exec();
    }

    async getBotAIById(botId: string): Promise<BotAI> {
        const bot = await this.botModel.findById(botId).exec();
        if (!bot) {
            throw new NotFoundException('BotAI not found');
        }
        return bot;
    }

    async updateBotAI(botId: string, botData: Partial<BotAI>): Promise<BotAI> {
        const updatedBot = await this.botModel
            .findByIdAndUpdate(botId, botData, { new: true })
            .exec();

        if (!updatedBot) {
            throw new NotFoundException('BotAI not found');
        }

        return updatedBot;
    }

    async deleteBotAI(botId: string): Promise<void> {
        const deletedBot = await this.botModel.findByIdAndRemove(botId).exec();
        if (!deletedBot) {
            throw new NotFoundException('BotAI not found');
        }
    }
}


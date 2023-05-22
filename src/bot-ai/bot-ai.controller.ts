import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { BotAIService } from './bot-ai.service'; // Import the BotAIService
import { CreateBotAIDto } from './dto/create-bot-ai.dto'; // Import the CreateBotAIDto
import { UpdateBotAIDto } from './dto/update-bot-ai.dto'; // Import the UpdateBotAIDto

@Controller('bot-ai') // Specify the route prefix for the controller
export class BotAiController {
    constructor(private readonly botAIService: BotAIService) { }

    @Get()
    getAllBotAI() {
        return this.botAIService.getAllBotAI();
    }

    @Get(':id')
    getBotAIById(@Param('id') id: string) {
        return this.botAIService.getBotAIById(id);
    }

    @Post()
    createBotAI(@Body() createBotAIDto: CreateBotAIDto) {
        return this.botAIService.createBotAI(createBotAIDto);
    }

    @Patch(':id')
    updateBotAI(@Param('id') id: string, @Body() updateBotAIDto: UpdateBotAIDto) {
        return this.botAIService.updateBotAI(id, updateBotAIDto);
    }

    @Delete(':id')
    deleteBotAI(@Param('id') id: string) {
        return this.botAIService.deleteBotAI(id);
    }
}

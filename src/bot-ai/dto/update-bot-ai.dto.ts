import { IsString, IsArray, ValidateNested, IsNotEmpty, ArrayNotEmpty, ArrayMinSize, Min, Max } from 'class-validator';

export class UpdateBotAIDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsString()
    bot_name: string;

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    myBots: {
        ChatID: string; BotSettings: {
            expertise: string;
            max_response_length: number;
        }
    }[];
}

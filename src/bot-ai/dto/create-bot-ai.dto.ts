import { IsString, IsArray, ValidateNested, IsNotEmpty, ArrayNotEmpty, ArrayMinSize, Min, Max } from 'class-validator';

export class CreateBotAIDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  bot_name: string;

  @IsNotEmpty()
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

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

interface BotSettings {
    expertise: string;
    max_response_length: number;
    // Other bot settings...?
}

@Schema()
export class BotAI extends Document {
    @Prop()
    user_id: string;

    @Prop()
    bot_name: string;

    @Prop([
        {
            ChatID: String,
            BotSettings: { type: MongooseSchema.Types.Mixed },
        },
    ])
    myBots: { ChatID: string; BotSettings: BotSettings }[];
}

export const BotAISchema = SchemaFactory.createForClass(BotAI);

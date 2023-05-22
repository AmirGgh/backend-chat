import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Group extends Document {
    @Prop()
    groupName: string;

    @Prop([String])
    admin_id: string[];

    @Prop([String])
    members: string[];

    @Prop()
    botID: string;

    @Prop({ type: Date, default: Date.now })
    timestamp: Date;
}

export const GroupSchema = SchemaFactory.createForClass(Group);

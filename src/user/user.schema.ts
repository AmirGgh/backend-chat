import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import bcrypt from 'bcrypt';


@Schema()
export class User extends Document {
    @Prop()
    username: string;

    @Prop()
    fullname: string;

    @Prop()
    password: string;

    @Prop()
    email: string;

    @Prop([String])
    contacts: string[];

    @Prop()
    botId: string;

    async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}

export const UserSchema = SchemaFactory.createForClass(User);

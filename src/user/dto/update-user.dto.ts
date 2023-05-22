
import { IsString, IsArray } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    username?: string;

    @IsString()
    fullname?: string;

    @IsString()
    password?: string;

    @IsString()
    email?: string;

    @IsArray()
    contacts?: string[];

    @IsString()
    botId?: string;


}

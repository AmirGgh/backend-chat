import { IsString, IsArray, IsDateString } from 'class-validator';

export class UpdateGroupDto {
    @IsString()
    groupName?: string;

    @IsArray()
    adminIds?: string[];

    @IsArray()
    memberIds?: string[];

    @IsString()
    botId?: string;

    @IsDateString()
    timestamp?: Date;
}

import { IsNotEmpty, IsString, IsArray, IsDateString } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  groupName: string;

  @IsNotEmpty()
  @IsArray()
  adminIds: string[];

  @IsArray()
  memberIds: string[];

  @IsNotEmpty()
  @IsString()
  botId: string;

  @IsNotEmpty()
  @IsDateString()
  timestamp: Date;
}

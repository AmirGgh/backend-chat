
import { IsString, IsArray, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username?: string;

  @IsNotEmpty()
  @IsString()
  fullname?: string;

  @IsNotEmpty()
  @IsString()
  password?: string;

  @IsNotEmpty()
  @IsString()
  email?: string;

  @IsArray()
  contacts?: string[];

  @IsString()
  botId?: string;
}

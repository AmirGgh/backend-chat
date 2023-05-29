import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfig } from './config/mongo.config';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { BotAiModule } from './bot-ai/bot-ai.module';
import { ChatGateway } from './chat/chat.gateway';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [mongoConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('mongo.uri'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    PassportModule.register({ session: true }),
    UserModule,
    GroupModule,
    BotAiModule,
    AuthModule,
  ],
  providers: [ChatGateway],
})
export class AppModule { }

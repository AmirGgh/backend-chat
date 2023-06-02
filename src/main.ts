import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as session from 'express-session';
import * as passport from 'passport';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  // app.use(session({
  //   secret: 'lrznc4o88htqp548q9h89q54',
  //   saveUninitialized: false,
  //   resave: false,
  //   cookie: {
  //     maxAge: 60000
  //   }
  // }))
  // app.use(passport.initialize())
  // app.use(passport.session())
  await app.listen(3000);
}
bootstrap();

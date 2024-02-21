import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as ejs from 'ejs';
import {join} from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.engine('html',ejs.renderFile);
  app.set('view engine', 'html');
  app.set('front',join(__dirname,',,','front'));
 
  await app.listen(3000);
}
bootstrap();

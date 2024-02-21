import { Module } from '@nestjs/common';
import { indexController } from './app.controller';
import { AppService } from './app.service';
import { TrabaloController } from './trabalo/trabalo.controller';

@Module({
  imports: [],
  controllers: [indexController],
  providers: [AppService],
})
export class AppModule {}

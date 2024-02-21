import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('index')
export class indexController{
  @Get()
  @Render('index')
  index(){
    return[]
  }
}

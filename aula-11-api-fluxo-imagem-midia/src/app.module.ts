import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MidiaModule } from './midia.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [MidiaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { EstoquesController } from './estoques.controller.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'aula-17-documentacao-com-swagger-nestjs',
    }),
  ],
  controllers: [AppController, EstoquesController],
  providers: [AppService],
})
export class AppModule {}

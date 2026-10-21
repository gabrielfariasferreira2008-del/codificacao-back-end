
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Catalogo de Estoques')
    .setDescription(
      'Documentação técnica interativa da API de Catálogo de Estoques',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('estoques', 'Operações do catálogo de estoques')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
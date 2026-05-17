import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Tarjetas')
    .setDescription('Clon del Laboratorio 06 para la sesión de Base de Datos Documentales')
    .setVersion('1.0')
    .addTag('tarjetas')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // CORRECCIÓN: Escuchar en la interfaz 0.0.0.0 para entornos Docker
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
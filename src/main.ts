import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CONFIGURACIÓN DE SWAGGER
  const config = new DocumentBuilder()
    .setTitle('API de Tarjetas')
    .setDescription('Clon del Laboratorio 06 para la sesión de Base de Datos Documentales')
    .setVersion('1.0')
    .addTag('tarjetas')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  // Esto le dice que la url será http://localhost:9191/api
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
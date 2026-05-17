import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarjetasModule } from './tarjetas/tarjetas.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { LoggerModule } from './logger/logger.module';
import { LoggerService } from './logger/logger.service';

@Module({
  controllers: [AppController],
  providers: [AppService, LoggerService],
  imports: [TarjetasModule, MikroOrmModule.forRoot({}), LoggerModule],
})
export class AppModule {}
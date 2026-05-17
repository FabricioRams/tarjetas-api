import { Module } from '@nestjs/common';
import { TarjetasService } from './tarjetas.service';
import { TarjetasController } from './tarjetas.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Tarjeta } from './entities/tarjeta.entity';
import { LoggerModule } from 'src/logger/logger.module';
import { LoggerService } from 'src/logger/logger.service';

@Module({
  imports: [MikroOrmModule.forFeature([Tarjeta]),
            LoggerModule],
  controllers: [TarjetasController],
  providers: [TarjetasService, LoggerService],
})
export class TarjetasModule {}
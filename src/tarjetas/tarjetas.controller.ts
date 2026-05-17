import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { TarjetasService } from './tarjetas.service';
import { CreateTarjetaDto } from './dto/create-tarjeta.dto';
import { UpdateTarjetaDto } from './dto/update-tarjeta.dto';
import { LoggerService } from '../logger/logger.service';

@Controller('tarjetas')
export class TarjetasController {
  constructor(
    private readonly tarjetasService: TarjetasService,
    private readonly logger: LoggerService
  ) {}

  @Post()
  async create(@Body() createTarjetaDto: CreateTarjetaDto) {
    try {
      this.logger.log('This trigger a create request.', 'TarjetasController');
      return await this.tarjetasService.create(createTarjetaDto);
    } catch (error: any) {
      // AQUÍ CUMPLIMOS LA ACTIVIDAD 1
      this.logger.error('Error al crear la tarjeta', error.stack, 'TarjetasController');
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll() {
    try {
      this.logger.log('This trigger a findAll request.', 'TarjetasController');
      return await this.tarjetasService.findAll();
    } catch (error: any) {
      this.logger.error('Error al obtener tarjetas', error.stack, 'TarjetasController');
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      this.logger.log(`This trigger a findOne request for id ${id}.`, 'TarjetasController');
      return await this.tarjetasService.findOne(+id);
    } catch (error: any) {
      this.logger.error(`Error al buscar la tarjeta ${id}`, error.stack, 'TarjetasController');
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTarjetaDto: UpdateTarjetaDto) {
    try {
      this.logger.log(`This trigger a update request for id ${id}.`, 'TarjetasController');
      return await this.tarjetasService.update(+id, updateTarjetaDto);
    } catch (error: any) {
      this.logger.error(`Error al actualizar la tarjeta ${id}`, error.stack, 'TarjetasController');
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      this.logger.log(`This trigger a delete request for id ${id}.`, 'TarjetasController');
      return await this.tarjetasService.remove(+id);
    } catch (error: any) {
      this.logger.error(`Error al eliminar la tarjeta ${id}`, error.stack, 'TarjetasController');
      throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
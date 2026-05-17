import { Injectable } from '@nestjs/common';
import { CreateTarjetaDto } from './dto/create-tarjeta.dto';
import { UpdateTarjetaDto } from './dto/update-tarjeta.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Tarjeta } from './entities/tarjeta.entity';

@Injectable()
export class TarjetasService {
  constructor(
    @InjectRepository(Tarjeta)
    private readonly tarjetaRepository: EntityRepository<Tarjeta>,
  ) {}

  async create(createTarjetaDto: CreateTarjetaDto) {
    const tarjeta = this.tarjetaRepository.create(createTarjetaDto);
    await this.tarjetaRepository.getEntityManager().flush();
    return tarjeta;
  }

  async findAll() {
    return await this.tarjetaRepository.findAll();
  }

  async findOne(id: number) {
    return await this.tarjetaRepository.findOne(id);
  }

  async update(id: number, updateTarjetaDto: UpdateTarjetaDto) {
    const tarjeta = await this.findOne(id);
    if (tarjeta) {
      Object.assign(tarjeta, updateTarjetaDto);
      await this.tarjetaRepository.getEntityManager().flush();
    }
    return tarjeta;
  }

  async remove(id: number) {
    const tarjeta = await this.findOne(id);
    if (tarjeta) {
      await this.tarjetaRepository.getEntityManager().remove(tarjeta).flush();
    }
    return tarjeta;
  }
}
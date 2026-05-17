import { PartialType } from '@nestjs/mapped-types';
import { CreateTarjetaDto } from './create-tarjeta.dto';

export class UpdateTarjetaDto extends PartialType(CreateTarjetaDto) {
  titular!: string;
  numero!: string;
  expiracion!: string;
  cvv!: string;
}
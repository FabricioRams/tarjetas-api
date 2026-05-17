import { Entity, PrimaryKey, Property } from '@mikro-orm/decorators/legacy';

@Entity()
export class Tarjeta {
 
  @PrimaryKey({ autoincrement: true, type: 'number' })
  id!: number;

 
  @Property({ type: 'string' })
  titular!: string;

  @Property({ type: 'string' })
  numero!: string;

  @Property({ type: 'string' })
  expiracion!: string;

  @Property({ type: 'string' })
  cvv!: string;
}
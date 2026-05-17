// Use the core package where decorators are exported for newer MikroORM versions
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Tarjeta {
  @PrimaryKey()
  id!: number;

  @Property()
  titular!: string;

  @Property()
  numero!: string;

  @Property()
  expiracion!: string;

  @Property()
  cvv!: string;
}
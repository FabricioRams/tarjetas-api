import { defineConfig } from '@mikro-orm/postgresql';
import { ReflectMetadataProvider } from '@mikro-orm/decorators/legacy';
import { Migrator } from '@mikro-orm/migrations'; 
import { Tarjeta } from './src/tarjetas/entities/tarjeta.entity';

export default defineConfig({
  entities: [Tarjeta],
  dbName: 'postgres',
  user: 'postgres',
  password: 'upt.2023',
  host: process.env.DBHOST || 'localhost',
  port: 5432,
  metadataProvider: ReflectMetadataProvider,
  extensions: [Migrator], 
});
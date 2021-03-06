import { TypeOrmModuleOptions } from "@nestjs/typeorm";

import * as config from 'config';

/**
 * Configuración de TypeOrm para su conexión a la base de datos
 * 
 * La uri para la conexión es obtenida de las variables de entorno 
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URI || config.get('db.url'),
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false
}

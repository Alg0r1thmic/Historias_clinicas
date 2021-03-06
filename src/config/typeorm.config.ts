import { TypeOrmModuleOptions } from "@nestjs/typeorm";

import * as config from 'config';

/**
 * Configuración de TypeOrm para su conexión a la base de datos
 * 
 * La uri para la conexión es obtenida de las variables de entorno 
 */
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: 'postgres://cbhkvdnadfuvtf:0e5167c568068ea26d7ab93711b0cc45d40e61f8bbf9935d52ee02fc047d820a@ec2-50-17-90-177.compute-1.amazonaws.com:5432/de6v24ejjudj38',
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false
}

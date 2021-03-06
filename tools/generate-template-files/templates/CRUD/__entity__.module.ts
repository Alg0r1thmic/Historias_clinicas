import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { __entity__ } from './__entity__(kebabCase).entity';
import { __entity__Controller } from './__entity__(kebabCase).controller';
import { __entity__Service } from './__entity__(kebabCase).service';

/**
 * Se registra la entidad __entity__ en TypeOrm, el controlador, y el servicio, que a su vez es exportado para su uso en otros módulos
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      __entity__
    ]),
  ],
  providers: [
    __entity__Service
  ],
  exports: [
    __entity__Service
  ],
  controllers: [
    __entity__Controller
  ],
})
export class __entity__Module {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IpsPublicas } from './ips-publicas.entity';
import { IpsPublicasController } from './ips-publicas.controller';
import { IpsPublicasService } from './ips-publicas.service';

/**
 * Se registra la entidad IpsPublicas en TypeOrm, el controlador, y el servicio, que a su vez es exportado para su uso en otros módulos
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      IpsPublicas
    ]),
  ],
  providers: [
    IpsPublicasService
  ],
  exports: [
    IpsPublicasService
  ],
  controllers: [
    IpsPublicasController
  ],
})
export class IpsPublicasModule {}

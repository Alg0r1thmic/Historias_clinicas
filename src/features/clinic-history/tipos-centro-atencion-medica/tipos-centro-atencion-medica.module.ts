import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TiposCentroAtencionMedica } from './tipos-centro-atencion-medica.entity';
import { TiposCentroAtencionMedicaController } from './tipos-centro-atencion-medica.controller';
import { TiposCentroAtencionMedicaService } from './tipos-centro-atencion-medica.service';

/**
 * Se registra la entidad TiposCentroAtencionMedica en TypeOrm, el controlador, y el servicio, que a su vez es exportado para su uso en otros módulos
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      TiposCentroAtencionMedica
    ]),
  ],
  providers: [
    TiposCentroAtencionMedicaService
  ],
  exports: [
    TiposCentroAtencionMedicaService
  ],
  controllers: [
    TiposCentroAtencionMedicaController
  ],
})
export class TiposCentroAtencionMedicaModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CentrosAtencionMedica } from './centros-atencion-medica.entity';
import { CentrosAtencionMedicaController } from './centros-atencion-medica.controller';
import { CentrosAtencionMedicaService } from './centros-atencion-medica.service';

/**
 * Se registra la entidad CentrosAtencionMedica en TypeOrm, el controlador, y el servicio, que a su vez es exportado para su uso en otros módulos
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      CentrosAtencionMedica
    ]),
  ],
  providers: [
    CentrosAtencionMedicaService
  ],
  exports: [
    CentrosAtencionMedicaService
  ],
  controllers: [
    CentrosAtencionMedicaController
  ],
})
export class CentrosAtencionMedicaModule {}

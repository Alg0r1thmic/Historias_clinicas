import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pacientes } from './pacientes.entity';
import { PacientesController } from './pacientes.controller';
import { PacientesService } from './pacientes.service';

/**
 * Se registra la entidad Pacientes en TypeOrm, el controlador, y el servicio, que a su vez es exportado para su uso en otros módulos
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Pacientes
    ]),
  ],
  providers: [
    PacientesService
  ],
  exports: [
    PacientesService
  ],
  controllers: [
    PacientesController
  ],
})
export class PacientesModule {}

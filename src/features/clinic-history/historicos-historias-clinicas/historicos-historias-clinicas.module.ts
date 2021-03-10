import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HistoricosHistoriasClinicas } from './historicos-historias-clinicas.entity';
import { HistoricosHistoriasClinicasController } from './historicos-historias-clinicas.controller';
import { HistoricosHistoriasClinicasService } from './historicos-historias-clinicas.service';

/**
 * Se registra la entidad HistoricosHistoriasClinicas en TypeOrm, el controlador, y el servicio, que a su vez es exportado para su uso en otros módulos
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      HistoricosHistoriasClinicas
    ]),
  ],
  providers: [
    HistoricosHistoriasClinicasService
  ],
  exports: [
    HistoricosHistoriasClinicasService
  ],
  controllers: [
    HistoricosHistoriasClinicasController
  ],
})
export class HistoricosHistoriasClinicasModule {}

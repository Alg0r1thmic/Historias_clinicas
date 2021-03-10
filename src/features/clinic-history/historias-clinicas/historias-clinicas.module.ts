import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HistoriasClinicas } from './historias-clinicas.entity';
import { HistoriasClinicasController } from './historias-clinicas.controller';
import { HistoriasClinicasService } from './historias-clinicas.service';

/**
 * Se registra la entidad HistoriasClinicas en TypeOrm, el controlador, y el servicio, que a su vez es exportado para su uso en otros módulos
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      HistoriasClinicas
    ]),
  ],
  providers: [
    HistoriasClinicasService
  ],
  exports: [
    HistoriasClinicasService
  ],
  controllers: [
    HistoriasClinicasController
  ],
})
export class HistoriasClinicasModule {}

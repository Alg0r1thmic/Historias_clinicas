import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { HistoricosHistoriasClinicas } from './historicos-historias-clinicas.entity';

/**
 * Servicio que proporciona todos los métodos CRUD heredando de TypeOrmCrudService
 */
@Injectable()
export class HistoricosHistoriasClinicasService extends TypeOrmCrudService<HistoricosHistoriasClinicas> {
  
  /**
   * El repositorio de HistoricosHistoriasClinicas es inyectado al servicio en el constructor 
   */
  constructor(@InjectRepository(HistoricosHistoriasClinicas) repo) {
    super(repo);
  }
}

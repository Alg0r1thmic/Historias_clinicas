import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { HistoriasClinicas } from './historias-clinicas.entity';

/**
 * Servicio que proporciona todos los métodos CRUD heredando de TypeOrmCrudService
 */
@Injectable()
export class HistoriasClinicasService extends TypeOrmCrudService<HistoriasClinicas> {
  
  /**
   * El repositorio de HistoriasClinicas es inyectado al servicio en el constructor 
   */
  constructor(@InjectRepository(HistoriasClinicas) repo) {
    super(repo);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Pacientes } from './pacientes.entity';

/**
 * Servicio que proporciona todos los métodos CRUD heredando de TypeOrmCrudService
 */
@Injectable()
export class PacientesService extends TypeOrmCrudService<Pacientes> {
  
  /**
   * El repositorio de Pacientes es inyectado al servicio en el constructor 
   */
  constructor(@InjectRepository(Pacientes) repo) {
    super(repo);
  }
}

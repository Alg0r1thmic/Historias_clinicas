import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { CentrosAtencionMedica } from './centros-atencion-medica.entity';

/**
 * Servicio que proporciona todos los métodos CRUD heredando de TypeOrmCrudService
 */
@Injectable()
export class CentrosAtencionMedicaService extends TypeOrmCrudService<CentrosAtencionMedica> {
  
  /**
   * El repositorio de CentrosAtencionMedica es inyectado al servicio en el constructor 
   */
  constructor(@InjectRepository(CentrosAtencionMedica) repo) {
    super(repo);
  }
}

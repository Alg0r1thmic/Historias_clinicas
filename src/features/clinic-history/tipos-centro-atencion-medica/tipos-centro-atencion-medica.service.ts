import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { TiposCentroAtencionMedica } from './tipos-centro-atencion-medica.entity';

/**
 * Servicio que proporciona todos los métodos CRUD heredando de TypeOrmCrudService
 */
@Injectable()
export class TiposCentroAtencionMedicaService extends TypeOrmCrudService<TiposCentroAtencionMedica> {
  
  /**
   * El repositorio de TiposCentroAtencionMedica es inyectado al servicio en el constructor 
   */
  constructor(@InjectRepository(TiposCentroAtencionMedica) repo) {
    super(repo);
  }
}

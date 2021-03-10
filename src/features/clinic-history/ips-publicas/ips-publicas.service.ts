import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { IpsPublicas } from './ips-publicas.entity';

/**
 * Servicio que proporciona todos los métodos CRUD heredando de TypeOrmCrudService
 */
@Injectable()
export class IpsPublicasService extends TypeOrmCrudService<IpsPublicas> {
  
  /**
   * El repositorio de IpsPublicas es inyectado al servicio en el constructor 
   */
  constructor(@InjectRepository(IpsPublicas) repo) {
    super(repo);
  }
}

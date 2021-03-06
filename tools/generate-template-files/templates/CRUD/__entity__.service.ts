import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { __entity__ } from './__entity__(kebabCase).entity';

/**
 * Servicio que proporciona todos los métodos CRUD heredando de TypeOrmCrudService
 */
@Injectable()
export class __entity__Service extends TypeOrmCrudService<__entity__> {
  
  /**
   * El repositorio de __entity__ es inyectado al servicio en el constructor 
   */
  constructor(@InjectRepository(__entity__) repo) {
    super(repo);
  }
}

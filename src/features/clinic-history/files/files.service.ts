import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Files } from './files.entity';

/**
 * Servicio que proporciona todos los métodos CRUD heredando de TypeOrmCrudService
 */
@Injectable()
export class FilesService extends TypeOrmCrudService<Files> {
  
  /**
   * El repositorio de Files es inyectado al servicio en el constructor 
   */
  constructor(@InjectRepository(Files) repo) {
    super(repo);
  }
}

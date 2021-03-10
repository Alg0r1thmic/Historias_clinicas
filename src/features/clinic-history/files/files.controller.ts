import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Crud,
  CrudController
} from '@nestjsx/crud';

import { CLINIC_HISTORY_PREFIX } from '@shared/constants';
import { Files } from './files.entity';
import { FilesService } from './files.service';


/**
 * Endpoint para los métodos CRUD de Files
 */
@Crud({
  model: {
    type: Files,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    }
  }
})
@ApiTags('files')
@Controller(`${CLINIC_HISTORY_PREFIX}files`)
export class FilesController implements CrudController<Files> {
  
  /**
   * Los métodos heredados en FilesService son inyectados al controlador 
   */
  constructor(public service: FilesService) {}
}

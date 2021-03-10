import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Crud,
  CrudController
} from '@nestjsx/crud';

import { CLINIC_HISTORY_PREFIX } from '@shared/constants';
import { IpsPublicas } from './ips-publicas.entity';
import { IpsPublicasService } from './ips-publicas.service';


/**
 * Endpoint para los métodos CRUD de IpsPublicas
 */
@Crud({
  model: {
    type: IpsPublicas,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    }
  }
})
@ApiTags('ips-publicas')
@Controller(`${CLINIC_HISTORY_PREFIX}ips-publicas`)
export class IpsPublicasController implements CrudController<IpsPublicas> {
  
  /**
   * Los métodos heredados en IpsPublicasService son inyectados al controlador 
   */
  constructor(public service: IpsPublicasService) {}
}

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Crud,
  CrudController
} from '@nestjsx/crud';

import { __modulo__(constantCase)_PREFIX } from '@shared/constants';
import { __entity__ } from './__entity__(kebabCase).entity';
import { __entity__Service } from './__entity__(kebabCase).service';


/**
 * Endpoint para los métodos CRUD de __entity__
 */
@Crud({
  model: {
    type: __entity__,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    }
  }
})
@ApiTags('__entity__(kebabCase)')
@Controller(`${__modulo__(constantCase)_PREFIX}__entity__(kebabCase)`)
export class __entity__Controller implements CrudController<__entity__> {
  
  /**
   * Los métodos heredados en __entity__Service son inyectados al controlador 
   */
  constructor(public service: __entity__Service) {}
}

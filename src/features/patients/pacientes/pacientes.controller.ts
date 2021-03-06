import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Crud,
  CrudController
} from '@nestjsx/crud';

import { PATIENTS_PREFIX } from '@shared/constants';
import { Pacientes } from './pacientes.entity';
import { PacientesService } from './pacientes.service';


/**
 * Endpoint para los métodos CRUD de Pacientes
 */
@Crud({
  model: {
    type: Pacientes,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    }
  }
})
@ApiTags('pacientes')
@Controller(`${PATIENTS_PREFIX}pacientes`)
export class PacientesController implements CrudController<Pacientes> {
  
  /**
   * Los métodos heredados en PacientesService son inyectados al controlador 
   */
  constructor(public service: PacientesService) {}
}

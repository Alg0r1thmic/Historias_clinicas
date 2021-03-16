import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Crud,
  CrudController
} from '@nestjsx/crud';

import { CLINIC_HISTORY_PREFIX } from '@shared/constants';
import { CentrosAtencionMedica } from './centros-atencion-medica.entity';
import { CentrosAtencionMedicaService } from './centros-atencion-medica.service';


/**
 * Endpoint para los métodos CRUD de CentrosAtencionMedica
 */
@Crud({
  model: {
    type: CentrosAtencionMedica,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    }
  },
  query:{
    join:{
      tipoCentroAtencionMedica:{
        eager:true
      }
    }
  }
})
@ApiTags('centros-atencion-medica')
@Controller(`${CLINIC_HISTORY_PREFIX}centros-atencion-medica`)
export class CentrosAtencionMedicaController implements CrudController<CentrosAtencionMedica> {
  
  /**
   * Los métodos heredados en CentrosAtencionMedicaService son inyectados al controlador 
   */
  constructor(public service: CentrosAtencionMedicaService) {}
}

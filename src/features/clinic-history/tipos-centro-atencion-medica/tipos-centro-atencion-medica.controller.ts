import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Crud,
  CrudController
} from '@nestjsx/crud';

import { CLINIC_HISTORY_PREFIX } from '@shared/constants';
import { TiposCentroAtencionMedica } from './tipos-centro-atencion-medica.entity';
import { TiposCentroAtencionMedicaService } from './tipos-centro-atencion-medica.service';


/**
 * Endpoint para los métodos CRUD de TiposCentroAtencionMedica
 */
@Crud({
  model: {
    type: TiposCentroAtencionMedica,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    }
  }
})
@ApiTags('tipos-centro-atencion-medica')
@Controller(`${CLINIC_HISTORY_PREFIX}tipos-centro-atencion-medica`)
export class TiposCentroAtencionMedicaController implements CrudController<TiposCentroAtencionMedica> {
  
  /**
   * Los métodos heredados en TiposCentroAtencionMedicaService son inyectados al controlador 
   */
  constructor(public service: TiposCentroAtencionMedicaService) {}
}

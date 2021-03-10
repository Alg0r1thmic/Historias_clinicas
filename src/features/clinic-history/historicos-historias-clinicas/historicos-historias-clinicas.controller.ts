import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Crud,
  CrudController
} from '@nestjsx/crud';

import { CLINIC_HISTORY_PREFIX } from '@shared/constants';
import { HistoricosHistoriasClinicas } from './historicos-historias-clinicas.entity';
import { HistoricosHistoriasClinicasService } from './historicos-historias-clinicas.service';


/**
 * Endpoint para los métodos CRUD de HistoricosHistoriasClinicas
 */
@Crud({
  model: {
    type: HistoricosHistoriasClinicas,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    }
  }
})
@ApiTags('historicos-historias-clinicas')
@Controller(`${CLINIC_HISTORY_PREFIX}historicos-historias-clinicas`)
export class HistoricosHistoriasClinicasController implements CrudController<HistoricosHistoriasClinicas> {
  
  /**
   * Los métodos heredados en HistoricosHistoriasClinicasService son inyectados al controlador 
   */
  constructor(public service: HistoricosHistoriasClinicasService) {}
}

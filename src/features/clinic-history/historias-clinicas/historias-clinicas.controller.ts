import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  Crud,
  CrudController
} from '@nestjsx/crud';

import { CLINIC_HISTORY_PREFIX } from '@shared/constants';
import { HistoriasClinicas } from './historias-clinicas.entity';
import { HistoriasClinicasService } from './historias-clinicas.service';


/**
 * Endpoint para los métodos CRUD de HistoriasClinicas
 */
@Crud({
  model: {
    type: HistoriasClinicas,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    }
  }
})
@ApiTags('historias-clinicas')
@Controller(`${CLINIC_HISTORY_PREFIX}historias-clinicas`)
export class HistoriasClinicasController implements CrudController<HistoriasClinicas> {
  
  /**
   * Los métodos heredados en HistoriasClinicasService son inyectados al controlador 
   */
  constructor(public service: HistoriasClinicasService) {}
}

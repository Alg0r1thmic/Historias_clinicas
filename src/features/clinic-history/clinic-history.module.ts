import { Module } from '@nestjs/common';
import { CentrosAtencionMedicaModule } from './centros-atencion-medica';
import { FilesModule } from './files';
import { HistoriasClinicasModule } from './historias-clinicas';
import { IpsPublicasModule } from './ips-publicas';
import { PacientesModule } from './pacientes';
import { TiposCentroAtencionMedicaModule } from './tipos-centro-atencion-medica';

@Module({
    imports:[
        CentrosAtencionMedicaModule,
        FilesModule,
        HistoriasClinicasModule,
        IpsPublicasModule,
        PacientesModule,
        TiposCentroAtencionMedicaModule
    ]
})
export class ClinicHistoryModule {}

import { Module } from '@nestjs/common';
import { PacientesModule } from './pacientes';

@Module({
    imports:[
        PacientesModule
    ]
})
export class PatientsModule {}

import { Module } from '@nestjs/common';
import { ClinicHistoryModule } from './clinic-history/clinic-history.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [ClinicHistoryModule, PatientsModule]
})
export class FeaturesModule {}

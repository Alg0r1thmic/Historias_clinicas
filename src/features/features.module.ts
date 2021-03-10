import { Module } from '@nestjs/common';
import { ClinicHistoryModule } from './clinic-history/clinic-history.module';

@Module({
  imports: [ClinicHistoryModule]
})
export class FeaturesModule {}

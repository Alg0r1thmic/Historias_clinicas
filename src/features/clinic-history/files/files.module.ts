import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Files } from './files.entity';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';

/**
 * Se registra la entidad Files en TypeOrm, el controlador, y el servicio, que a su vez es exportado para su uso en otros módulos
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Files
    ]),
  ],
  providers: [
    FilesService
  ],
  exports: [
    FilesService
  ],
  controllers: [
    FilesController
  ],
})
export class FilesModule {}

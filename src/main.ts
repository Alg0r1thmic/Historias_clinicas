import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import * as compression from 'compression';
import * as helmet from 'helmet';

async function bootstrap() {




  const options = new DocumentBuilder()
    .setTitle('Historias Clinicas')
    .setDescription('API Rest para historias clinicas')
    .setVersion('1.0')
    .build();
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(morgan('dev'));
  app.use(compression());
  app.use(helmet());


  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreauthMiddleware } from './auth/preauth.middleware';
import { typeOrmConfig } from './config/typeorm.config';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    FeaturesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PreauthMiddleware).exclude(
      { path: 'personal', method: RequestMethod.GET },
    ).forRoutes({
      path: '*', method: RequestMethod.ALL
    });
  }
}

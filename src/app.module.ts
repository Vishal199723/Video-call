import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CorsMiddleware } from './common/middlewares/cors.middleware';
import { LoggerMiddleware } from './common/middlewares/logger.moddleware';

import { LoggerModule } from './logger/logger.module';

import { HealthcheckModule } from './healthcheck/healthcheck.module';

import { WssModule } from './wss/wss.module';
import { AppService } from './wss/AppService';

@Module({
  imports: [LoggerModule, HealthcheckModule, WssModule],
  providers: [AppService],
  controllers: [],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
    consumer.apply(LoggerMiddleware, CorsMiddleware).forRoutes('*');
  }
}

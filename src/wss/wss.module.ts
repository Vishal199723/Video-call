import { Module } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { AppService } from './AppService';

import { WssController } from './wss.controller';
import { WssGateway } from './wss.gateway';

@Module({
  imports: [],
  providers: [
    WssGateway,
    {
      provide: LoggerService,
      useValue: new LoggerService('Websocket'),
    },
    AppService
  ],
  exports: [WssGateway],
  controllers: [WssController],
})
export class WssModule {}

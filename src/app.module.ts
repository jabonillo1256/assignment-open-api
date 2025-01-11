import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoingeckoService } from './coingecko/coingecko.service';
import { CoingeckoController } from './coingecko/coingecko.controller';

@Module({
  imports: [],
  controllers: [AppController, CoingeckoController],
  providers: [AppService, CoingeckoService],
})
export class AppModule {}

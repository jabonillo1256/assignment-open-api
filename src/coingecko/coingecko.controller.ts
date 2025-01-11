import { Controller, Get, Query } from '@nestjs/common';
import { CoingeckoService } from './coingecko.service';

@Controller('coingecko')
export class CoingeckoController {
    constructor(private readonly coingeckoService: CoingeckoService) { }

    @Get('crypto-price')
    async getCryptoPrice(@Query('coin') coin: string) {
        return this.coingeckoService.getCryptoPrice(coin);
    }

    @Get('market-data')
    async getMarketData(@Query('coin') coin: string) {
        return this.coingeckoService.getMarketData(coin);
    }

    @Get('trending-coins')
    async getTrendingCoins() {
        return this.coingeckoService.getTrendingCoins();
    }

    @Get('market-chart')
    async getCoinMarketChart(
        @Query('coin') coin: string,
        @Query('days') days: number,
    ) {
        return this.coingeckoService.getCoinMarketChart(coin, days);
    }


}

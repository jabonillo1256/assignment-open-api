import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CoingeckoService {
    private readonly apiUrl = 'https://api.coingecko.com/api/v3';

    async getCryptoPrice(coin: string): Promise<any> {
        try {
            const response = await axios.get(`${this.apiUrl}/simple/price`, {
                params: { ids: coin, vs_currencies: 'usd' },
            });
            return response.data;
        } catch (error) {
            throw new HttpException(
                error.response?.data || 'Failed to fetch data from CoinGecko',
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getMarketData(coin: string): Promise<any> {
        try {
            const response = await axios.get(`${this.apiUrl}/coins/${coin}`);
            return response.data;
        } catch (error) {
            throw new HttpException(
                error.response?.data || 'Failed to fetch market data',
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getTrendingCoins(): Promise<any> {
        try {
            const response = await axios.get(`${this.apiUrl}/search/trending`);
            return response.data;
        } catch (error) {
            throw new HttpException(
                error.response?.data || 'Failed to fetch trending coins',
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

}

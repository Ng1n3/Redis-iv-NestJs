import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER)private readonly cacheManager: Cache) {
    
  }
  async getHello() {
    await this.cacheManager.set('cached_item', {key: 32})
    const cachedItem = await this.cacheManager.get('cached_item')
    console.log(cachedItem);
    return 'Hello World!';
  }
}

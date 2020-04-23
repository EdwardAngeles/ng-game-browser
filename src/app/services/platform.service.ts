import { Injectable } from '@angular/core';
import { Platform } from './../models/platform';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  
  constructor(private httpClient: HttpClient) { }
  
  async fetchPlatforms() {
    const url = 'https://api.rawg.io/api/platforms';
    let platforms: Platform[] = [];
    
    const {results} = await this.httpClient.get(url).toPromise() as {results};
    results.forEach(({id, name}) => platforms.push({id, name}));
    
    return platforms;
  }
}

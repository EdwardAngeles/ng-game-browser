import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) { }
  
  async fetchGenres(): Promise<Genre[]> {
    const url = `https://api.rawg.io/api/genres`;
    let genres: Genre[] = [];
    
    const {results} = await this.httpClient.get(url).toPromise() as {results};
    results.forEach(({id, name}) => genres.push({id, name}));
    
    return genres;
  }
}

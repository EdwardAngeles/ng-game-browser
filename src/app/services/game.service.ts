import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game, createGamesFromResults } from '../models/game.model';
import { Observable } from 'rxjs';
import { SearchOptions } from '../models/search-options';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  private baseUrl: string = 'https://api.rawg.io/api/games?exclude_additions=true&stores=1,3,4,6,11';
  @Output() gamesFetched: EventEmitter<Game[]> = new EventEmitter<Game[]>();
  
  constructor(private httpClient: HttpClient) {
    this.fetchGames();
  }
  
  async fetchGames(searchOptions?: SearchOptions): Promise<Game[]> {
    const url = this.buildSearchUrl(searchOptions);
    
    const {results} = await this.httpClient.get(url).toPromise() as {results};
    const games: Game[] = createGamesFromResults(results);
    
    this.gamesFetched.emit(games);
    return games;
  }
  
  private buildSearchUrl(search: SearchOptions = {}): string {
    let url: string = this.baseUrl;
    
    if (search.title) url += `&search=${encodeURIComponent(search.title.trim())}`;
    if (search.year) url += `&dates=${search.year}-01-01,${search.year}-12-31`;
    if (search.genre_id) url += `&genres=${search.genre_id}`;
    if (search.platform_id) url += `&platforms=${search.platform_id}`;
    
    return url;
  }
}

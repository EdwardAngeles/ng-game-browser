import { Component, OnInit } from '@angular/core';
import { SearchOptions } from 'src/app/models/search-options';
import { NgForm } from '@angular/forms';
import { Genre } from 'src/app/models/genre';
import { Platform } from 'src/app/models/platform';
import { GenreService } from 'src/app/services/genre.service';
import { PlatformService } from 'src/app/services/platform.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  
  searchOptions: SearchOptions;
  genres: Genre[];
  platforms: Platform[];
  years: number[] = [];
  
  constructor(
    private gameService: GameService,
    private genreService: GenreService,
    private platformService: PlatformService
  ){ }

  async ngOnInit() {
    this.genres = await this.genreService.fetchGenres();
    this.platforms = await this.platformService.fetchPlatforms();
    this.years = Array(25).fill(new Date().getFullYear()).map((year, count) => year-count);
  }
  
  onSubmit(form: NgForm): void {
    console.log(form);
    const searchOptions: SearchOptions = {
      title: form.value.title,
      genre_id: form.value.genre === -1 ? null : form.value.genre,
      year: form.value.year === -1 ? null : form.value.year,
      platform_id: form.value.platform === -1 ? null : form.value.platform
    };
    
    this.gameService.fetchGames(searchOptions);
  }
}

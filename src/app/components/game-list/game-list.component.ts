import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) { }

  async ngOnInit() {
    this.gameService.gamesFetched.subscribe((games) => {
      this.games = games;
    });
    
  }

}

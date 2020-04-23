import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-videoclip-dialog',
  templateUrl: './game-videoclip-dialog.component.html',
  styleUrls: ['./game-videoclip-dialog.component.scss']
})
export class GameVideoclipDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public game: Game
  ) { }

  ngOnInit(): void {
  }

}

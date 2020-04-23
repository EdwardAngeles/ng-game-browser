import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { MatDialog } from '@angular/material/dialog';
import { GameVideoclipDialogComponent } from '../game-videoclip-dialog/game-videoclip-dialog.component';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  
  @Input() game: Game;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(GameVideoclipDialogComponent, {data: this.game});
    
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog Result: ${result}`);
    });
  }

}

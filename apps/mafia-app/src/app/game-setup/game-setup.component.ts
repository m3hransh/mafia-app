import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-game-setup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-setup.component.html',
  styleUrl: './game-setup.component.css',
})
export class GameSetupComponent {
  numberOfPlayers: number ;
  constructor (private gameDataService: GameDataService) {
    this.numberOfPlayers = this.gameDataService.getGameData().numberOfPlayers;
  }
}

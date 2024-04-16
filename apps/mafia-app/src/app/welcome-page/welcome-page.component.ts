import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css',
})
export class WelcomePageComponent {
  playerCount = 0; // Assign an initial value to playerCount
  constructor(private gameDataServcie: GameDataService) {} // Inject the Router module

  setPlayerCount() {
    this.gameDataServcie.setGameData({ numberOfPlayers: this.playerCount });
  }
}

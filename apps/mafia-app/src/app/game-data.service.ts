import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  private gameData: any = {
    numberOfPlayers: 0,
    playerNames: [],
    playerRoles: [],
    playerStatus: [],
    playerVotes: [],
    playerActions: [],
  }
  constructor() {

    console.log('GameDataService constructor called');

   }

  getGameData() {
    return this.gameData;
  }
  setGameData(data: any) {
    this.gameData = data;
  }
}

import { Component, OnInit } from '@angular/core';

import { PlayerService } from './services/player.service';
import { BasketballPlayer } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isNewForm: boolean;
  showForm: boolean;
  formPlayer: BasketballPlayer;
  players: BasketballPlayer[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().then(players => this.players = players);
  }

  showPlayerForm(player: BasketballPlayer) {
    if(!player) {
      player = new BasketballPlayer("","","");
      this.isNewForm = true;
    }

    this.showForm = true;
    this.formPlayer = player;
  }

  removePlayer(player: BasketballPlayer) {
    this.playerService.removePlayer(player);
  }

  savePlayer(player: BasketballPlayer) {
    if(player) {
      if(this.isNewForm) {
        this.playerService.insertPlayer(player);
      }
      else {
        this.playerService.updatePlayer(player);
      }

      this.showForm = false;
      this.isNewForm = false;
      player = null;
    }
  }
}
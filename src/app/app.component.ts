import { Component } from '@angular/core';
import { BasketballPlayer } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isNewForm: boolean;
  showForm: boolean;
  formPlayer: BasketballPlayer;
  players = [
    new BasketballPlayer("Lebron", "James", "Captain of the Cavaliers and a 3 time champion."),
    new BasketballPlayer("Kyrie", "Irving", "One of the best ball handlers and scorers in the NBA."),
    new BasketballPlayer("Kevin", "Love", "A three point threat and a rebounding machine."),
  ];

  showPlayerForm(player: BasketballPlayer) {
    if(!player) {
      player = new BasketballPlayer("","","");
      this.isNewForm = true;
    }

    this.showForm = true;
    this.formPlayer = player;
  }

  removePlayer(player: BasketballPlayer) {
    var index = this.players.indexOf(player, 0);

    if (index > -1) {
       this.players.splice(index, 1);
    }
  }

  savePlayer(player: BasketballPlayer) {
    if(player) {
      if(this.isNewForm) {
        this.players.push(player);
      }

      this.showForm = false;
      this.isNewForm = false;
      player = null;
    }
  }
}

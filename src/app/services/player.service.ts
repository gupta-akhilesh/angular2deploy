import { Injectable } from '@angular/core';

import { BasketballPlayer } from '../models/player';

@Injectable()
export class PlayerService {
    players: BasketballPlayer[];

    getPlayers(): Promise<BasketballPlayer[]> {
        this.players = [
            new BasketballPlayer("Lebron", "James", "Captain of the Cavaliers and a 3 time champion."),
            new BasketballPlayer("Kyrie", "Irving", "One of the best ball handlers and scorers in the NBA."),
            new BasketballPlayer("Kevin", "Love", "A three point threat and a rebounding machine."),
        ];

        return new Promise(resolve => {
            setTimeout(() => resolve(this.players), 500);
        });
    }

    insertPlayer(player: BasketballPlayer): Promise<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.players.push(player);
                resolve();
            }, 500);
        });
    }

    updatePlayer(player: BasketballPlayer) {
        return new Promise(resolve => {
            setTimeout(() => {
                // Nothing to do, as the player is already updated in
                // the collection right now.
            },500);
        });
    }

    removePlayer(player: BasketballPlayer) {
        return new Promise(resolve => {
            setTimeout(() => {
                var index = this.players.indexOf(player, 0);

                if (index > -1) {
                    this.players.splice(index, 1);
                }
            }, 500);
        });
    }
}
import { KoikoiPlayer } from "./KoikoiPlayer";
import { Table } from "../common/Table";
import { GameTypes } from "../../types/common/GameTypes";
import { PlayerTypes } from "../../types/common/PlayerTypes";

class KoikoiTable extends Table<KoikoiPlayer> {
  private _doublePointsRule: boolean = false;
  private _noRoleRule: boolean = false;
  private _optionRoleRule: boolean = false;

  constructor() {
    super(GameTypes.こいこい, 2, 5);
  }

  public generatePlayers(playerNumber: number): KoikoiPlayer[] {
    const players: KoikoiPlayer[] = [];

    for (let i: number = 0; i < playerNumber; i++) {
      if (i === playerNumber - 1) {
        players.push(new KoikoiPlayer("PLAYER", PlayerTypes.Player));
      } else {
        const botName: string = "BOT_" + String(i);
        players.push(new KoikoiPlayer(botName, PlayerTypes.Ai));
      }
    }

    return players;
  }

  get doublePointsRule(): boolean {
    return this._doublePointsRule;
  }

  set doublePointsRule(bool: boolean) {
    this._doublePointsRule = bool;
  }

  get noRoleRule(): boolean {
    return this._noRoleRule;
  }

  set noRoleRule(bool: boolean) {
    this._noRoleRule = bool;
  }

  get optionRoleRule(): boolean {
    return this._optionRoleRule;
  }

  set optionRoleRule(bool: boolean) {
    this._optionRoleRule = bool;
  }
}

export { KoikoiTable };

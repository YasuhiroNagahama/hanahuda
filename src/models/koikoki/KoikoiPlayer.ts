import { Player } from "../common/Player";
import { KoikoiCapturedCards } from "./KoikoiCaputuredCards";
import { PlayerTypes } from "../../types/common/PlayerTypes";
import { CombinationTypes } from "../../types/koikoi/CombinationTypes";

class KoikoiPlayer extends Player {
  private readonly _combinationsArr: CombinationTypes[] = [];
  private _score: number = 0;

  constructor(playerName: string, playerType: PlayerTypes) {
    super(playerName, playerType);
  }

  public prepare(): void {
    super.resetHand();
    super.resetCapturedCards();
  }

  public addScore(score: number): void {
    this._score += score;
  }

  get score(): number {
    return this._score;
  }
}

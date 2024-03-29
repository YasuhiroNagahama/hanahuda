import { Deck } from "./Deck";
import { Player } from "./Player";
import { FieldCards } from "./FieldCards";
import { GameTypes } from "../../types/common/GameTypes";
import { CapturedCards } from "./CapturedCards";

abstract class Table<T extends Player<CapturedCards>> {
  private readonly _gameType: GameTypes;
  private readonly _players: T[] = [];
  private readonly _deck: Deck;
  private readonly _fieldCards: FieldCards = new FieldCards();
  private _playerNumber: number;
  private _round: number;

  constructor(gameType: GameTypes, playerNumber: number, round: number) {
    this._gameType = gameType;
    this._playerNumber = playerNumber;
    this._round = round;
    this._players = this.generatePlayers(this._playerNumber);
    this._deck = new Deck(this._gameType);
  }

  protected abstract generatePlayers(playerNumber: number): T[];

  get gameType(): GameTypes {
    return this._gameType;
  }

  get players(): T[] {
    return this._players;
  }

  get deck(): Deck {
    return this._deck;
  }

  get fieldCards(): FieldCards {
    return this._fieldCards;
  }

  get playerNumber(): number {
    return this._playerNumber;
  }

  set playerNumber(number: number) {
    this._playerNumber = number;
  }

  get round(): number {
    return this._round;
  }

  set round(number: number) {
    this._round = number;
  }
}

export { Table };

import { Deck } from "./Deck";
import { Player } from "./Player";
import { FieldCards } from "./FieldCards";
import { GameTypes } from "../../types/common/GameTypes";

class Table {
  private readonly _gameType: GameTypes;
  private readonly _playerNumber: number;
  private readonly _players: Player[] = [];
  private readonly _deck: Deck;
  private readonly _fieldCards: FieldCards = new FieldCards();

  constructor(gameType: GameTypes, playerNumber: number) {
    this._gameType = gameType;
    this._playerNumber = playerNumber;
    this._deck = new Deck(this._gameType);
  }

  get gameType(): GameTypes {
    return this._gameType;
  }

  get playerNumber(): number {
    return this._playerNumber;
  }

  get players(): Player[] {
    return this._players;
  }

  get deck(): Deck {
    return this._deck;
  }

  get fieldCards(): FieldCards {
    return this._fieldCards;
  }
}

export { Table };

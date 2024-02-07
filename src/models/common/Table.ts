import { GameTypes } from "../../types/common/GameTypes";
import { Player } from "./Player";
import { Deck } from "./Deck";
import { FieldCards } from "./FieldCards";

class Table {
  private readonly _gameType: GameTypes;
  private _players: Player[] = [];
  private _deck: Deck;
  private _fieldCards: FieldCards = new FieldCards();

  constructor(gameType: GameTypes) {
    this._gameType = gameType;
    this._deck = new Deck(this._gameType);
  }

  get gameType(): GameTypes {
    return this._gameType;
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

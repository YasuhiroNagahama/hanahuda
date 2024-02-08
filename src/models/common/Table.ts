import { Player } from "./Player";
import { Deck } from "./Deck";
import { FieldCards } from "./FieldCards";
import { GameTypes } from "../../types/common/GameTypes";

class Table {
  private readonly _gameType: GameTypes;
  private readonly _players: Player[] = [];
  private readonly _deck: Deck;
  private readonly _fieldCards: FieldCards = new FieldCards();

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

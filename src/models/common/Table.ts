import { GameTypes } from "../../types/common/GameTypes";
import { Player } from "./Player";
import { Deck } from "./Deck";
import { FieldCards } from "./FieldCards";

class Table {
  private gameType: GameTypes;
  private players: Player[];
  private deck: Deck;
  private fieldCards: FieldCards;

  constructor(
    gameType: GameTypes,
    players: Player[],
    deck: Deck,
    fieldCards: FieldCards
  ) {
    this.gameType = gameType;
    this.players = players;
    this.deck = deck;
    this.fieldCards = fieldCards;
  }

  getGameType(): GameTypes {
    return this.gameType;
  }

  getPlayers(): Player[] {
    return this.players;
  }

  getDeck(): Deck {
    return this.deck;
  }

  getFieldCards(): FieldCards {
    return this.fieldCards;
  }
}

export { Table };

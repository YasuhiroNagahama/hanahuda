import { GameTypes } from "../../types/common/GameTypes";
import { Card } from "./Card";

class Deck {
  private deck: Card[];
  private gameType: GameTypes;

  constructor(deck: Card[], gameType: GameTypes) {
    this.deck = deck;
    this.gameType = gameType;
  }

  shuffle(): void {
    // デッキをシャッフルするロジック
    // (省略)
  }

  isEmpty(): boolean {
    return this.deck.length === 0;
  }

  resetDeck(): void {
    // デッキをリセットするロジック
    // (省略)
  }

  drawCard(): Card {
    if (this.isEmpty()) {
      throw new Error("The deck is empty.");
    }
    return this.deck.pop()!;
  }

  getRemainingCardsCount(): number {
    return this.deck.length;
  }

  getDeck(): Card[] {
    return this.deck;
  }

  getGameType(): GameTypes {
    return this.gameType;
  }
}

export { Deck };

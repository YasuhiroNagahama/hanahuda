import { GameTypes } from "../../types/common/GameTypes";
import { Card } from "./Card";

class Deck {
  private readonly _gameType: GameTypes;
  private _cards: Card[] = [];

  constructor(gameType: GameTypes) {
    this._gameType = gameType;
  }

  public shuffle(): void {
    // デッキをシャッフルするロジック
    // (省略)
  }

  public isEmpty(): boolean {
    return this._cards.length === 0;
  }

  public resetDeck(): void {
    // デッキをリセットするロジック
    // (省略)
  }

  public drawCard(): Card {
    if (this.isEmpty()) {
      throw new Error("The deck is empty.");
    }
    return this._cards.pop()!;
  }

  get remainingCardsCount(): number {
    return this._cards.length;
  }

  get deck(): Card[] {
    return this._cards;
  }

  get gameType(): GameTypes {
    return this._gameType;
  }
}

export { Deck };

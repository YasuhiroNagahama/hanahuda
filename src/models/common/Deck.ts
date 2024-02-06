import { CARDINFOARR } from "../../constants/common/CardInfo";
import { GameTypes } from "../../types/common/GameTypes";
import { CardInfo } from "../../types/common/CardInfo";
import { Card } from "./Card";

class Deck {
  private readonly _gameType: GameTypes;
  private _cards: Card[] = [];

  constructor(gameType: GameTypes) {
    this._gameType = gameType;
  }

  public createDeck(): void {
    CARDINFOARR.forEach((CARDINFO: CardInfo) => {
      this._cards.push(
        new Card(
          CARDINFO.cardName,
          CARDINFO.cardType,
          CARDINFO.months,
          CARDINFO.plant
        )
      );
    });
  }

  public resetDeck(): void {
    this._cards = [];
  }

  public shuffle(): void {
    for (let i: number = this._cards.length - 1; i >= 0; i -= 1) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
    }
  }

  public isEmpty(): boolean {
    return this._cards.length === 0;
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

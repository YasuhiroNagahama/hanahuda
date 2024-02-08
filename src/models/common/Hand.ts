import { Card } from "./Card";

class Hand {
  private readonly _hand: Card[] = [];

  public addCard(card: Card): void {
    this._hand.push(card);
  }

  public resetCards(): void {
    this._hand.length = 0;
  }

  public isEmpty(): boolean {
    return this._hand.length === 0;
  }

  get remainingCardsCount(): number {
    return this._hand.length;
  }

  get hand(): Card[] {
    return this._hand;
  }
}

export { Hand };

import { Card } from "./Card";

class Hand {
  private _cards: Card[] = [];

  public addCard(card: Card): void {
    this.cards.push(card);
  }

  public resetCards(): void {
    this._cards = [];
  }

  get remainingCardsCount(): number {
    return this.cards.length;
  }

  get cards(): Card[] {
    return this._cards;
  }
}

export { Hand };

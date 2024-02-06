import { Card } from "./Card";

class CapturedCards {
  private _cards: Card[] = [];

  public addCard(card: Card): void {
    this._cards.push(card);
  }

  public resetCards(): void {
    this._cards = [];
  }

  get totalPoints(): number {
    return this._cards.reduce(
      (totalPoints, card) => totalPoints + card.points,
      0
    );
  }

  get remainingCardsCount(): number {
    return this._cards.length;
  }

  get cards(): Card[] {
    return this._cards;
  }
}

export { CapturedCards };

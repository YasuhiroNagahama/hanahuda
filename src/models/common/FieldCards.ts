import { Card } from "./Card";

class FieldCards {
  private _cards: Card[] = [];

  addCard(card: Card): void {
    this._cards.push(card);
  }

  resetCards(): void {
    this._cards = [];
  }

  get remainingCardsCount(): number {
    return this._cards.length;
  }

  get cards(): Card[] {
    return this._cards;
  }
}

export { FieldCards };

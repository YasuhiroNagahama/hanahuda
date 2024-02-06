import { Card } from "./Card";

class FieldCards {
  private cards: Card[];

  constructor(cards: Card[] = []) {
    this.cards = cards;
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  resetFieldCards(): void {
    this.cards = [];
  }

  getRemainingCardsCount(): number {
    return this.cards.length;
  }

  getFieldCards(): Card[] {
    return this.cards;
  }
}

export { FieldCards };

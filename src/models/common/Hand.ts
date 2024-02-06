import { Card } from "./Card";

class Hand {
  private cards: Card[];

  constructor(cards: Card[] = []) {
    this.cards = cards;
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  resetHand(): void {
    this.cards = [];
  }

  getRemainingCardsCount(): number {
    return this.cards.length;
  }

  getHand(): Card[] {
    return this.cards;
  }
}

export { Hand };

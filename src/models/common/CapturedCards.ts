import { Card } from "./Card";

class CapturedCards {
  private cards: Card[];
  private capturedCards: Card[];

  constructor(cards: Card[] = []) {
    this.cards = cards;
    this.capturedCards = [];
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  resetCapturedCards(): void {
    this.capturedCards = [];
  }

  getTotalCapturedPoints(): number {
    return this.capturedCards.reduce(
      (totalPoints, card) => totalPoints + card.getPoints(),
      0
    );
  }

  getRemainingCardsCount(): number {
    return this.cards.length;
  }

  getCapturedCards(): Card[] {
    return this.capturedCards;
  }
}

export { CapturedCards };

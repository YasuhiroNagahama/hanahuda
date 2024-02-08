import { Card } from "./Card";

class CapturedCards {
  private readonly _capturedCards: Card[] = [];

  public addCard(card: Card): void {
    this._capturedCards.push(card);
  }

  public resetCards(): void {
    this._capturedCards.length = 0;
  }

  public isEmpty(): boolean {
    return this._capturedCards.length === 0;
  }

  get totalPoints(): number {
    return this._capturedCards.reduce(
      (totalPoints, capturedCard) => totalPoints + capturedCard.points,
      0
    );
  }

  get remainingCardsCount(): number {
    return this._capturedCards.length;
  }

  get capturedCards(): Card[] {
    return this._capturedCards;
  }
}

export { CapturedCards };

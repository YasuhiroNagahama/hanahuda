import { Card } from "./Card";
import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";

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

  protected countCardsByType(type: CardTypes): number {
    return this.capturedCards.filter(
      (capturedCard) => capturedCard.type === type
    ).length;
  }

  protected countCardsByName(name: CardNames): number {
    return this.capturedCards.filter(
      (capturedCard) => capturedCard.name === name
    ).length;
  }

  protected includeCardsByName(name: CardNames): boolean {
    return (
      this.capturedCards.filter((capturedCard) => capturedCard.name === name)
        .length === 1
    );
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

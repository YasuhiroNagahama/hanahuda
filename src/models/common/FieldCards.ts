import { Card } from "./Card";

class FieldCards {
  private readonly _fieldCards: Card[] = [];

  public addCard(card: Card): void {
    this._fieldCards.push(card);
  }

  public resetCards(): void {
    this._fieldCards.length = 0;
  }

  public isEmpty(): boolean {
    return this._fieldCards.length === 0;
  }

  // 手札と同月の札がfieldにあるか
  public hasSameMonthCards(card: Card): boolean {
    return this._fieldCards.some(
      (fieldCard: Card) => fieldCard.month === card.month
    );
  }

  // 引数のカードを場に出した場合に獲得できる札を配列で返す
  public canTakeCardFromField(card: Card): Card[] {
    if (this.isEmpty()) {
      throw new Error("Field has no cards.");
    }

    return this._fieldCards.filter(() => {
      return this.hasSameMonthCards(card);
    });
  }

  get remainingCardsCount(): number {
    return this._fieldCards.length;
  }

  get fieldCards(): Card[] {
    return this._fieldCards;
  }
}

export { FieldCards };

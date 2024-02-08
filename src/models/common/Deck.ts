import { GameTypes } from "../../types/common/GameTypes";
import { CardInfo } from "../../types/common/CardInfo";
import { Card } from "./Card";
import { PointsCalculator } from "./PointsCalculator";
import { getPointsCalculator } from "../../utils/utils";
import { hasCardPointsGame } from "../../utils/utils";
import { selectCardsForGame } from "../../utils/utils";

class Deck {
  private readonly _gameType: GameTypes;
  private readonly _pointsCalculator: PointsCalculator | null;
  private _cards: Card[] = [];

  constructor(gameType: GameTypes) {
    this._gameType = gameType;
    this._pointsCalculator = hasCardPointsGame(this._gameType)
      ? getPointsCalculator(this._gameType)
      : null;
    this._cards = this.createDeck(selectCardsForGame(this._gameType));
  }

  private createDeck(cardsInfo: CardInfo[]): Card[] {
    const cards: Card[] = [];

    if (this._pointsCalculator === null) {
      cardsInfo.forEach((cardInfo: CardInfo) => {
        cards.push(
          new Card(
            cardInfo.cardName,
            cardInfo.cardType,
            cardInfo.months,
            cardInfo.plant
          )
        );
      });
    } else {
      cardsInfo.forEach((cardInfo: CardInfo) => {
        cards.push(
          new Card(
            cardInfo.cardName,
            cardInfo.cardType,
            cardInfo.months,
            cardInfo.plant,
            this._pointsCalculator?.getCardPoint(
              cardInfo.cardName,
              cardInfo.cardType
            )
          )
        );
      });
    }

    return cards;
  }

  public resetDeck(): void {
    this._cards = [];
  }

  public shuffle(): void {
    for (let i: number = this._cards.length - 1; i >= 0; i -= 1) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
    }
  }

  public isEmpty(): boolean {
    return this._cards.length === 0;
  }

  public drawCard(): Card {
    if (this.isEmpty()) {
      throw new Error("The deck is empty.");
    }
    return this._cards.pop()!;
  }

  get remainingCardsCount(): number {
    return this._cards.length;
  }

  get gameType(): GameTypes {
    return this._gameType;
  }

  get pointsCalculator(): PointsCalculator | null {
    return this._pointsCalculator;
  }

  get deck(): Card[] {
    return this._cards;
  }
}

export { Deck };

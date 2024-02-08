import { Card } from "./Card";
import { PointsCalculator } from "../../interfaces/common/PointsCalculator";
import { GameTypes } from "../../types/common/GameTypes";
import { CardInfo } from "../../types/common/CardInfo";
import { getPointsCalculator } from "../../utils/utils";
import { hasCardPointsGame } from "../../utils/utils";
import { selectCardsForGame } from "../../utils/utils";

class Deck {
  private readonly _gameType: GameTypes;
  private readonly _pointsCalculator: PointsCalculator | null;
  private readonly _deck: Card[] = [];

  constructor(gameType: GameTypes) {
    this._gameType = gameType;
    this._pointsCalculator = hasCardPointsGame(this._gameType)
      ? getPointsCalculator(this._gameType)
      : null;
    this._deck = this.createDeck(selectCardsForGame(this._gameType));
  }

  private createDeck(cardsInfo: CardInfo[]): Card[] {
    if (this._pointsCalculator === null) {
      return cardsInfo.map((cardInfo: CardInfo) => {
        return new Card(
          cardInfo.name,
          cardInfo.type,
          cardInfo.month,
          cardInfo.plant
        );
      });
    }

    return cardsInfo.map((cardInfo: CardInfo) => {
      const points = this._pointsCalculator?.getCardPoint(
        cardInfo.name,
        cardInfo.type
      );
      return new Card(
        cardInfo.name,
        cardInfo.type,
        cardInfo.month,
        cardInfo.plant,
        points
      );
    });
  }

  public resetDeck(): void {
    this._deck.length = 0;
  }

  public shuffle(): void {
    for (let i: number = this._deck.length - 1; i >= 0; i -= 1) {
      const j: number = Math.floor(Math.random() * (i + 1));
      [this._deck[i], this._deck[j]] = [this._deck[j], this._deck[i]];
    }
  }

  public isEmpty(): boolean {
    return this._deck.length === 0;
  }

  public drawCard(): Card {
    if (this.isEmpty()) {
      throw new Error("The deck is empty.");
    }
    return this._deck.pop()!;
  }

  get remainingCardsCount(): number {
    return this._deck.length;
  }

  get gameType(): GameTypes {
    return this._gameType;
  }

  get pointsCalculator(): PointsCalculator | null {
    return this._pointsCalculator;
  }

  get deck(): Card[] {
    return this._deck;
  }
}

export { Deck };

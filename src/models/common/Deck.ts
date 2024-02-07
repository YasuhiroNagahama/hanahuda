import { CARDINFOARR } from "../../constants/common/CardInfo";
import { GameTypes } from "../../types/common/GameTypes";
import { CardInfo } from "../../types/common/CardInfo";
import { Months } from "../../types/common/Months";
import { Plants } from "../../types/common/Plants";
import { CardTypes } from "../../types/common/CardTypes";
import { Card } from "./Card";

class Deck {
  private readonly _gameType: GameTypes;
  private _cards: Card[] = [];

  constructor(gameType: GameTypes) {
    this._gameType = gameType;
    this._cards = this.createDeck(this.selectCardsForGame(this._gameType));
  }

  private selectCardsForGame(gameType: GameTypes): CardInfo[] {
    switch (gameType) {
      case GameTypes.かちかち:
        return this.selectCardsForKatikati([Months.November, Months.December]);
      case GameTypes.むし:
        return this.selectCardsForPlants([Plants.牡丹, Plants.萩]);
      case GameTypes.きんご:
      case GameTypes.おちょいかぶ:
      case GameTypes.引きカブ:
        return this.selectCardsForMonths([Months.November, Months.December]);
      case GameTypes.ポカ:
        return this.selectCardsForMonths([
          Months.August,
          Months.September,
          Months.October,
          Months.November,
          Months.December,
        ]);
      case GameTypes.えちょぼ:
        return this.selectCardsForMonths([
          Months.July,
          Months.August,
          Months.September,
          Months.October,
          Months.November,
          Months.December,
        ]);
      default:
        return CARDINFOARR;
    }
  }

  private selectCardsForKatikati(months: Months[]): CardInfo[] {
    const katikatiMonthsArr: Months[] = [
      Months.January,
      Months.April,
      Months.October,
    ];
    return CARDINFOARR.filter((cardInfo) => {
      const isKasu: boolean = cardInfo.cardType === CardTypes.カス;
      const isStripPaper: boolean = cardInfo.cardType === CardTypes.短冊;

      (!months.includes(cardInfo.months) && isKasu) ||
        (katikatiMonthsArr.includes(cardInfo.months) && isStripPaper);
    });
  }

  private selectCardsForMonths(months: Months[]): CardInfo[] {
    return CARDINFOARR.filter((cardInfo) => !months.includes(cardInfo.months));
  }

  private selectCardsForPlants(plants: Plants[]): CardInfo[] {
    return CARDINFOARR.filter((cardInfo) => !plants.includes(cardInfo.plant));
  }

  private createDeck(cardsInfo: CardInfo[]): Card[] {
    const cards: Card[] = [];

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

  get deck(): Card[] {
    return this._cards;
  }

  get gameType(): GameTypes {
    return this._gameType;
  }
}

export { Deck };

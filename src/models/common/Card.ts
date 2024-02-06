import { Months } from "../../types/common/Months";
import { Plants } from "../../types/common/Plants";
import { CardTypes } from "../../types/common/CardTypes";
import { CardNames } from "../../types/common/CardNames";

class Card {
  private readonly _cardName: CardNames;
  private readonly _cardType: CardTypes;
  private readonly _month: Months;
  private readonly _plant: Plants;
  private _points: number = 0;

  constructor(
    cardName: CardNames,
    cardType: CardTypes,
    month: Months,
    plant: Plants
  ) {
    this._cardName = cardName;
    this._cardType = cardType;
    this._month = month;
    this._plant = plant;
  }

  get cardName(): CardNames {
    return this._cardName;
  }

  get cardType(): CardTypes {
    return this._cardType;
  }

  get month(): Months {
    return this._month;
  }

  get plant(): Plants {
    return this._plant;
  }

  get points(): number {
    return this._points;
  }
}

export { Card };

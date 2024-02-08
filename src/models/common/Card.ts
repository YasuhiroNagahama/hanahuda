import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";
import { CardMonths } from "../../types/common/CardMonths";
import { CardPlants } from "../../types/common/CardPlants";

class Card {
  private readonly _name: CardNames;
  private readonly _type: CardTypes;
  private readonly _month: CardMonths;
  private readonly _plant: CardPlants;
  private readonly _points: number;

  constructor(
    name: CardNames,
    type: CardTypes,
    month: CardMonths,
    plant: CardPlants,
    points: number = 0
  ) {
    this._name = name;
    this._type = type;
    this._month = month;
    this._plant = plant;
    this._points = points;
  }

  get name(): CardNames {
    return this._name;
  }

  get type(): CardTypes {
    return this._type;
  }

  get month(): CardMonths {
    return this._month;
  }

  get plant(): CardPlants {
    return this._plant;
  }

  get points(): number {
    return this._points;
  }
}

export { Card };

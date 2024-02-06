import { Months } from "../../types/common/Months";
import { Names } from "../../types/common/Names";
import { Plants } from "../../types/common/Plants";

class Card {
  private readonly _name: Names;
  private readonly _month: Months;
  private readonly _plant: Plants;
  private readonly _points: number;

  constructor(name: Names, month: Months, plant: Plants, points: number) {
    this._name = name;
    this._month = month;
    this._plant = plant;
    this._points = points;
  }

  get name(): Names {
    return this._name;
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

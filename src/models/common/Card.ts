import { Months } from "../../types/common/Months";
import { Plants } from "../../types/common/Plants";

class Card {
  private month: Months;
  private plant: Plants;
  private points: number;

  constructor(month: Months, plant: Plants, points: number) {
    this.month = month;
    this.plant = plant;
    this.points = points;
  }

  getMonth(): Months {
    return this.month;
  }

  getPlant(): Plants {
    return this.plant;
  }

  getPoints(): number {
    return this.points;
  }
}

export { Card };

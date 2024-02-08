import { PointsCalculator } from "../../interfaces/common/PointsCalculator";
import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";

class CommonPointsCalculator implements PointsCalculator {
  public getCardPoint(name: CardNames, type: CardTypes): number {
    if (type === CardTypes.光札) return 20;
    else if (type === CardTypes.種札) return 10;
    else if (type === CardTypes.短冊) return 5;

    return 1;
  }
}

export { CommonPointsCalculator };

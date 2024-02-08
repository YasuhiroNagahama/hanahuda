import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";
import { PointsCalculator } from "../common/PointsCalculator";

class CommonPointsCalculator implements PointsCalculator {
  public getCardPoint(cardName: CardNames, cardType: CardTypes): number {
    if (cardType === CardTypes.光札) return 20;
    else if (cardType === CardTypes.種札) return 10;
    else if (cardType === CardTypes.短冊) return 5;

    return 1;
  }
}

export { CommonPointsCalculator };

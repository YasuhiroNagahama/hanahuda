import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";

interface PointsCalculator {
  getCardPoint(name: CardNames, type: CardTypes): number;
}

export { PointsCalculator };

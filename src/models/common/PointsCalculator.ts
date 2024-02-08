import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";

interface PointsCalculator {
  getCardPoint(cardName: CardNames, cardType: CardTypes): number;
}

export { PointsCalculator };

import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";
import { PointsCalculator } from "../common/PointsCalculator";

class RoppyakkennPointCalculator implements PointsCalculator {
  public getCardPoint(cardName: CardNames, cardType: CardTypes): number {
    if (cardName === CardNames.梅に鴬 || cardType === CardTypes.光札) return 50;
    else if (
      cardName === CardNames.桐色違い ||
      cardType === CardTypes.種札 ||
      cardType === CardTypes.短冊
    )
      return 10;

    return 0;
  }
}

export { RoppyakkennPointCalculator };

import { PointsCalculator } from "../../interfaces/common/PointsCalculator";
import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";

class RoppyakkennPointCalculator implements PointsCalculator {
  public getCardPoint(name: CardNames, type: CardTypes): number {
    if (name === CardNames.梅に鴬 || type === CardTypes.光札) return 50;
    else if (
      name === CardNames.桐色違い ||
      type === CardTypes.種札 ||
      type === CardTypes.短冊
    )
      return 10;

    return 0;
  }
}

export { RoppyakkennPointCalculator };

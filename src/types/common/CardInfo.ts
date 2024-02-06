import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";
import { Months } from "../../types/common/Months";
import { Plants } from "../../types/common/Plants";

type CardInfo = {
  cardName: CardNames;
  cardType: CardTypes;
  months: Months;
  plant: Plants;
};

export { CardInfo };

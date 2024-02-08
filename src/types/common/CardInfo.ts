import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";
import { CardMonths } from "./CardMonths";
import { CardPlants } from "./CardPlants";

type CardInfo = {
  name: CardNames;
  type: CardTypes;
  month: CardMonths;
  plant: CardPlants;
};

export { CardInfo };

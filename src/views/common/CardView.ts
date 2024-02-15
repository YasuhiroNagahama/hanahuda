import { CARD_IMAGES_MAP } from "../../constants/common/CardImages";
import { Card } from "../../models/common/Card";

class CardView {
  private readonly imageStr: string;
  private readonly isFaceUp: boolean = false;

  constructor(card: Card) {
    this.imageStr = CARD_IMAGES_MAP.get(card.name)!
  }
}

export { CardView };

import { CARD_IMAGES_MAP } from "../../constants/common/CardImages";
import { Card } from "../../models/common/Card";

class CardView {
  private readonly _card: Card;
  private readonly _isFaceUp: boolean = false;

  constructor(card: Card) {
    this._card = card;
  }

  get cardView(): string {
    return `<div class="card-img-wrapper"><img src="${CARD_IMAGES_MAP.get(
      this._card.name
    )}" alt="${
      this._card.name
    }" width="80" height="120" class="card-img"></div>`;
  }

  get card(): Card {
    return this._card;
  }

  get isFaceUp(): boolean {
    return this._isFaceUp;
  }
}

export { CardView };

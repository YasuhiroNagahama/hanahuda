import { CARD_IMAGES_MAP } from "../../constants/common/CardImages";
import { Card } from "../../models/common/Card";
import { PlayerTypes } from "../../types/common/PlayerTypes";

class CardView {
  private readonly _card: Card;
  private readonly _isFaceUp: boolean = false;

  constructor(card: Card) {
    this._card = card;
  }

  public addCardView(playerType: PlayerTypes): void {
    const cardImagePath: string = CARD_IMAGES_MAP.get(this._card.name)!;
    const handElement: HTMLDivElement = document.getElementById(
      playerType.toLowerCase() + "Hand"
    ) as HTMLDivElement;

    handElement.innerHTML += `<div class="hand-card-img-wrapper"><img src="${cardImagePath}" alt="${this._card.name}" width="60" height="90" class="card-img"></div>`;
  }

  get card(): Card {
    return this._card;
  }

  get isFaceUp(): boolean {
    return this._isFaceUp;
  }
}

export { CardView };

import { CARD_IMAGES_MAP } from "../../constants/common/CardImages";
import { Card } from "../../models/common/Card";
import { PlayerTypes } from "../../types/common/PlayerTypes";

class CardView {
  private readonly _card: Card;
  private readonly _isFaceUp: boolean = false;
  private readonly _cardImagePath: string;

  constructor(card: Card) {
    this._card = card;
    this._cardImagePath = CARD_IMAGES_MAP.get(this._card.name)!;
  }

  private createCardImageElement(
    width: number,
    height: number
  ): HTMLImageElement {
    const cardImage: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;
    cardImage.classList.add("card-img");

    const cardName: string = String(this._card.name);

    cardImage.src = this._cardImagePath;
    cardImage.alt = cardName;
    cardImage.width = width;
    cardImage.height = height;

    return cardImage;
  }

  private createFieldCardView(): HTMLDivElement {
    const cardView: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
    cardView.classList.add("field-card", "field-card-img-wrapper");

    const cardName: string = String(this._card.name);
    const cardMonth: string = String(this._card.month);

    cardView.setAttribute("name", cardName);
    cardView.setAttribute("month", cardMonth);

    const cardImage = this.createCardImageElement(80, 120);

    cardView.appendChild(cardImage);

    return cardView;
  }

  private createHandCardView(playerType: string): HTMLDivElement {
    const cardView: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;
    cardView.classList.add(playerType + "-hand-card", "hand-card-img-wrapper");

    const cardName: string = String(this._card.name);
    const cardMonth: string = String(this._card.month);

    cardView.setAttribute("name", cardName);
    cardView.setAttribute("month", cardMonth);

    const cardImage = this.createCardImageElement(60, 90);

    cardView.appendChild(cardImage);

    return cardView;
  }

  public addCardToHand(playerType: PlayerTypes): void {
    const handElement: HTMLDivElement = document.getElementById(
      playerType.toLowerCase() + "Hand"
    ) as HTMLDivElement;
    const cardView: HTMLDivElement = this.createHandCardView(
      String(playerType).toLowerCase()
    );

    handElement.appendChild(cardView);
  }

  public addCardToField(): void {
    const fieldElement: HTMLDivElement = document.getElementById(
      "fieldCards"
    ) as HTMLDivElement;
    const cardView: HTMLDivElement = this.createFieldCardView();

    fieldElement.appendChild(cardView);
  }

  get card(): Card {
    return this._card;
  }

  get isFaceUp(): boolean {
    return this._isFaceUp;
  }
}

export { CardView };

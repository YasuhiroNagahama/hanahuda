import { GAMEPAGE } from "../../config";
import { CARD_IMAGES_MAP } from "../../constants/common/CardImages";
import { FieldCards } from "../../models/common/FieldCards";
import { CardNames } from "../../types/common/CardNames";

class FieldView {
  private readonly _fieldCardsModel: FieldCards;

  constructor(fieldCardsModel: FieldCards) {
    this._fieldCardsModel = fieldCardsModel;
  }

  public addView(): void {
    if (GAMEPAGE) {
      GAMEPAGE.innerHTML += `<div id="fieldCards" class="field-cards-wrapper"></div>`;
    }
  }

  public addCardView(cardName: CardNames): void {
    const cardImagePath: string = CARD_IMAGES_MAP.get(cardName)!;
    const fieldElement: HTMLDivElement = document.getElementById(
      "fieldCards"
    ) as HTMLDivElement;

    fieldElement.innerHTML += `<div class="field-card-img-wrapper"><img src="${cardImagePath}" alt="${cardName}" width="80" height="120" class="card-img"></div>`;
  }
}

export { FieldView };

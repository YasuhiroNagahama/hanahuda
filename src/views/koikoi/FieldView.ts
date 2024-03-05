import { GAMEPAGE } from "../../config";
import { CARD_IMAGES_MAP } from "../../constants/common/CardImages";
import { FieldCards } from "../../models/common/FieldCards";
import { CardNames } from "../../types/common/CardNames";
import { Card } from "../../models/common/Card";
import { CardView } from "../common/CardView";

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

  public addCardToField(card: Card): void {
    const cardView: CardView = new CardView(card);
    cardView.addCardToField();
  }

  public addFadeClass(month: number): void {
    const fieldCardElements = document.querySelectorAll(".field-card");

    for(const fieldCardElement of fieldCardElements) {
      const fieldCardMonth: number = Number(fieldCardElement.getAttribute("month"));

      if(fieldCardMonth !== month) {
        fieldCardElement.classList.add("card-fade")
      }
    }
  }
  
  public removeFadeClass(): void {
    const fieldCardElements = document.querySelectorAll(".field-card");

    for(const fieldCardElement of fieldCardElements) {
      fieldCardElement.classList.remove("card-fade")
    }
  }
}

export { FieldView };

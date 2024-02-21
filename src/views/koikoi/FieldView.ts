import { GAMEPAGE } from "../../config";
import { FieldCards } from "../../models/common/FieldCards";

class FieldView {
    private readonly _fieldCardsModel: FieldCards

    constructor(fieldCardsModel: FieldCards) {
        this._fieldCardsModel = fieldCardsModel
    }

    public addView(): void {
        if(GAMEPAGE) {
            GAMEPAGE.innerHTML += `<div id="fieldCards" class="field-cards-wrapper"></div>`
        }
    }
}

export { FieldView };

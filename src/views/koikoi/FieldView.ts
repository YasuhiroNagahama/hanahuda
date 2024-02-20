import { FieldCards } from "../../models/common/FieldCards";

class FieldView {
    private readonly _fieldCardsModel: FieldCards

    constructor(fieldCardsModel: FieldCards) {
        this._fieldCardsModel = fieldCardsModel
    }
}

export { FieldView };

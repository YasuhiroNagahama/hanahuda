import { CapturedCards } from "../../models/common/CapturedCards";

class CapturedCardsView {
  private readonly _capturedCards: CapturedCards;

  constructor(capturedCards: CapturedCards) {
    this._capturedCards = capturedCards;
  }
}

export { CapturedCardsView };

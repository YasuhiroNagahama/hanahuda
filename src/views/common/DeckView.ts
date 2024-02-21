import { GAMEPAGE } from "../../config";

class DeckView {

  public addView(): void {
    if(GAMEPAGE) {
      GAMEPAGE.innerHTML += `<div class="deck-wrapper"></div>`
    }
  }
}

export { DeckView };

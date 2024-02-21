import { GAMEPAGE } from "../../config";
import { KoikoiPlayer } from "../../models/koikoki/KoikoiPlayer";
import { CapturedCardsView } from "./CapturedCardsView";

class PlayerView {
  private readonly _playerModel: KoikoiPlayer;
  private readonly _capturedCardView: CapturedCardsView;

  constructor(playerModel: KoikoiPlayer) {
    this._playerModel = playerModel;
    this._capturedCardView = new CapturedCardsView(
      this._playerModel.capturedCards
    );
  }

  public addView(): void {
    const playerName: string = this._playerModel.playerName;
    const playerType: string = String(
      this._playerModel.playerType
    ).toLowerCase();

    if (GAMEPAGE) {
      GAMEPAGE.innerHTML += `<div id="${playerType}View" class='${playerType}-wrapper participant-wrapper'>
      <div class="participant-name-wrapper">
        <p class="participant-name dotgothic16-regular">${playerName}</p>
      </div>
      <div class="participant-cards-wrapper ${playerType}-cards-wrapper">
        <div id="${playerType}Hand" class="participant-hand-wrapper ${playerType}-hand-wrapper"></div>
        <div id="${playerType}Cards" class="participant-captured-cards-wrapper ${playerType}-captured-cards-wrapper"></div>
      </div>
    </div>`;
    }
  }
}

export { PlayerView };

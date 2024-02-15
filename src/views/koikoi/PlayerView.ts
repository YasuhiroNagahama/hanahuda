import { KoikoiPlayer } from "../../models/koikoki/KoikoiPlayer";

class PlayerView {
  private readonly _playerModel: KoikoiPlayer;

  constructor(playerModel: KoikoiPlayer) {
    this._playerModel = playerModel;
  }

  get playerView(): string {
    return `<div class="player-wrapper">
            <div class="player-name-wrapper">
            <h1 class="player-name type-player">${this._playerModel.playerName}</h1>
            </div>
        </div>`;
  }
}

export { PlayerView };

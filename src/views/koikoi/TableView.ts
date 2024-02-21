import { GAMEPAGE } from "../../config";
import { KoikoiPlayer } from "../../models/koikoki/KoikoiPlayer";
import { KoikoiTable } from "../../models/koikoki/KoikoiTable";
import { DeckView } from "../common/DeckView";
import { GameView } from "../common/GameView";
import { FieldView } from "./FieldView";
import { PlayerView } from "./PlayerView";

class TableView extends GameView {
  private readonly _tableModel: KoikoiTable;
  private readonly _deckView: DeckView = new DeckView();
  private readonly _fieldView: FieldView;
  private readonly _playerViews: PlayerView[];

  constructor(tableModel: KoikoiTable) {
    super();
    this._tableModel = tableModel;
    this._fieldView = new FieldView(this._tableModel.fieldCards);
    this._playerViews = this.createPlayerViews();
  }

  private createPlayerViews(): PlayerView[] {
    const players: KoikoiPlayer[] = this._tableModel.players;
    const playerViews: PlayerView[] = [];

    players.forEach((player: KoikoiPlayer) => {
      playerViews.push(new PlayerView(player));
    });

    return playerViews;
  }

  public addTableView(): void {
    if (GAMEPAGE) {
      super.addClass();
      super.addHeader();

      this._playerViews.forEach((playerView: PlayerView) => {
        playerView.addView();
      });

      this._fieldView.addView();
      this._deckView.addView();
    }
  }

  get playerViews(): PlayerView[] {
    return this._playerViews;
  }

  get fieldView(): FieldView {
    return this._fieldView
  }
}

export { TableView };

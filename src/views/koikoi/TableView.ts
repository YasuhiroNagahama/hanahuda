import { KoikoiPlayer } from "../../models/koikoki/KoikoiPlayer";
import { KoikoiTable } from "../../models/koikoki/KoikoiTable";
import { FieldView } from "./FieldView";
import { PlayerView } from "./PlayerView";

class TableView {
  private readonly _tableModel: KoikoiTable;
  private readonly _fieldView: FieldView;
  private readonly _playerViews: PlayerView[];

  constructor(tableModel: KoikoiTable) {
    this._tableModel = tableModel;
    this._fieldView = new FieldView(this._tableModel.fieldCards);
    this._playerViews = this.createPlayerViews()
  }

  private createPlayerViews(): PlayerView[] {
    const players: KoikoiPlayer[] = this._tableModel.players
    const playerViews: PlayerView[] = []

    players.forEach((player: KoikoiPlayer) => {
        playerViews.push(new PlayerView(player))
    })

    return playerViews
  }
}

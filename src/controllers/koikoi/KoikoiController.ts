import { GameController } from "../../interfaces/common/GameController";
import { Card } from "../../models/common/Card";
import { Deck } from "../../models/common/Deck";
import { FieldCards } from "../../models/common/FieldCards";
import { KoikoiPlayer } from "../../models/koikoki/KoikoiPlayer";
import { KoikoiTable } from "../../models/koikoki/KoikoiTable";
import { delay } from "../../utils/utils";
import { FieldView } from "../../views/koikoi/FieldView";
import { PlayerView } from "../../views/koikoi/PlayerView";
import { TableView } from "../../views/koikoi/TableView";
import { KoikoiSettingController } from "./KoikoiSettingController";

class KoikoiController implements GameController {
  private readonly _koikoiTable: KoikoiTable = new KoikoiTable();
  private readonly _koikoiSettingController: KoikoiSettingController;
  private readonly _koikoiTableView: TableView;
  private readonly _koikoiPlayersView: PlayerView[];

  constructor() {
    this._koikoiSettingController = new KoikoiSettingController(
      this._koikoiTable
    );
    this._koikoiTableView = new TableView(this._koikoiTable);
    this._koikoiPlayersView = this._koikoiTableView.playerViews;
  }

  async initializeControllerMethods(): Promise<void> {
    // this._koikoiSettingController.runMethods()
    this._koikoiTableView.addTableView();
    await this.dealInitialCards();
  }

  private async dealInitialCards(): Promise<void> {
    const deck: Deck = this._koikoiTable.deck;
    deck.shuffle();

    const fieldCards: FieldCards = this._koikoiTable.fieldCards;
    const fieldView: FieldView = this._koikoiTableView.fieldView;

    for (let i: number = 0; i < 8; i++) {
      for (const playerView of this._koikoiPlayersView) {
        await delay(200);
        const player = playerView.playerModel;
        const card = deck.drawCard();
        player.addCard(card);
        playerView.addCardView(card, player.playerType);
      }

      await delay(200);
      const card: Card = deck.drawCard();

      fieldCards.addCard(card);
      fieldView.addCardView(card.name);
    }
  }
}

export { KoikoiController };

import { GameController } from "../../interfaces/common/GameController";
import { KoikoiTable } from "../../models/koikoki/KoikoiTable";
import { TableView } from "../../views/koikoi/TableView";
import { KoikoiSettingController } from "./KoikoiSettingController";

class KoikoiController implements GameController {
  private readonly _koikoiTable: KoikoiTable = new KoikoiTable();
  private readonly _koikoiSettingController: KoikoiSettingController;
  private readonly _koikoiTableView: TableView;

  constructor() {
    this._koikoiSettingController = new KoikoiSettingController(
      this._koikoiTable
    );
    this._koikoiTableView = new TableView(this._koikoiTable);
  }

  public initializeControllerMethods(): void {
    // this._koikoiSettingController.runMethods()
    this._koikoiTableView.addTableView();
  }

  private handleMenuButton(): void {
    const menuButton: HTMLElement = document.querySelector(
      ".hamburger-menu-bars-wrapper"
    )!;
    menuButton.addEventListener("click", () => {
      const menu: HTMLElement = document.querySelector(
        ".hamburger-menu-buttons-wrapper"
      )!;
      menu.classList.toggle("is-active");
    });
  }
}

export { KoikoiController };

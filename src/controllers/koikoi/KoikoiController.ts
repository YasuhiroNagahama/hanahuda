import { GameController } from "../../interfaces/common/GameController";
import { KoikoiTable } from "../../models/koikoki/KoikoiTable";
import { GameRound } from "../../types/koikoi/GameRound";
import { GameView } from "../../views/common/GameView";

class KoikoiController implements GameController {
  private readonly _koikoiTable: KoikoiTable = new KoikoiTable();

  public initializeControllerMethods(): void {
    this.addGameView();
    this.addSettingView();
    this.handleMenuButton();
    this.handleDecideSettingButton();
  }

  private addGameView(): void {
    GameView.addView();
  }

  private addSettingView(): void {
    GameView.addSettingView();
  }

  private removeSettingView(): void {
    GameView.removeSettingView();
  }

  private setGameRound(): void {
    const checkedInput: HTMLInputElement = document.querySelector(
      ".game-round-input:checked"
    ) as HTMLInputElement;
    const roundStr: string = checkedInput.value;

    if (roundStr === "3") this._koikoiTable.round = GameRound.Three;
    else if (roundStr === "5") this._koikoiTable.round = GameRound.Five;
    else if (roundStr === "12") this._koikoiTable.round = GameRound.Twelve;
  }

  private setDoublePointsRule(): void {
    const inputElement: HTMLInputElement = document.getElementById(
      "doublePointsRule"
    ) as HTMLInputElement;

    if (inputElement.checked) this._koikoiTable.doublePointsRule = true;
  }

  private setNoRoleRule(): void {
    const inputElement: HTMLInputElement = document.getElementById(
      "noRoleRule"
    ) as HTMLInputElement;

    if (inputElement.checked) this._koikoiTable.noRoleRule = true;
  }

  private setOptionRoleRule(): void {
    const inputElement: HTMLInputElement = document.getElementById(
      "optionRoleRule"
    ) as HTMLInputElement;

    if (inputElement.checked) this._koikoiTable.optionRoleRule = true;
  }

  private handleDecideSettingButton(): void {
    const decideSettingButton: HTMLDivElement = document.getElementById(
      "decideButton"
    ) as HTMLDivElement;

    decideSettingButton.addEventListener("click", () => {
      this.setGameRound();
      this.setDoublePointsRule();
      this.setNoRoleRule();
      this.setOptionRoleRule();
      this.removeSettingView();
    });
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

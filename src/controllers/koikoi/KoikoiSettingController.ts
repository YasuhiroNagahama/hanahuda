import { KoikoiTable } from "../../models/koikoki/KoikoiTable";
import { GameRound } from "../../types/koikoi/GameRound";
import { SettingView } from "../../views/koikoi/SettingView";

class KoikoiSettingController {
  private readonly _koikoiTable: KoikoiTable;
  private readonly _koikoiSettingView: SettingView;

  constructor(koikoiTable: KoikoiTable) {
    this._koikoiTable = koikoiTable;
    this._koikoiSettingView = new SettingView();
  }

  public runMethods(): void {
    this._koikoiSettingView.addSettingView();

    this.setGameRound();
    this.setDoublePointsRule();
    this.setNoRoleRule();
    this.setOptionRoleRule();
    this.handleDecideSettingButton();
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

      this._koikoiSettingView.removeSettingView()
    });
  }
}

export { KoikoiSettingController };

import { KoikoiPlayer } from "./KoikoiPlayer";
import { Table } from "../common/Table";
import { GameTypes } from "../../types/common/GameTypes";

class KoikoiTable extends Table<KoikoiPlayer> {
  private _doublePointsRule: boolean = false;
  private _noRoleRule: boolean = false;
  private _optionRoleRule: boolean = false;

  constructor() {
    super(GameTypes.こいこい, 2, 5);
  }

  get doublePointsRule(): boolean {
    return this._doublePointsRule;
  }

  set doublePointsRule(bool: boolean) {
    this._doublePointsRule = bool;
  }

  get noRoleRule(): boolean {
    return this._noRoleRule;
  }

  set noRoleRule(bool: boolean) {
    this._noRoleRule = bool;
  }

  get optionRoleRule(): boolean {
    return this._optionRoleRule;
  }

  set optionRoleRule(bool: boolean) {
    this._optionRoleRule = bool;
  }
}

export { KoikoiTable };

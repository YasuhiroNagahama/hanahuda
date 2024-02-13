import { Controller } from "../../interfaces/common/Controller";
import { KoikoiTable } from "../../models/koikoki/KoikoiTable";

class KoikoiController implements Controller {
  private readonly _koikoiTable: KoikoiTable;

  constructor() {
    this._koikoiTable = new KoikoiTable();
  }

  private changePlayerNumber(): void {
    
  }
}

export { KoikoiController };

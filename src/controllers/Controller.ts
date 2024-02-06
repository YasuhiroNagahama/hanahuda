import { GameTypes } from "../types/common/GameTypes";
import { HomeView } from "../views/HomeView";

export class Controller {
  private gameType: GameTypes;

  constructor() {
    this.gameType = GameTypes.none;
  }

  public static addHomeView(): void {
    HomeView.addView();
  }

  public static addGameView(): void {}
}

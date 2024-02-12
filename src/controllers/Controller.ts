import { GameTypes } from "../types/common/GameTypes";
import { HomeView } from "../views/HomeView";

export class Controller {
  private gameType: GameTypes;

  constructor() {
    this.gameType = GameTypes.None;
  }

  public static initializeControllerMethods(): void {
    Controller.addHomeView();
    Controller.clickMenuButton();
  }

  public static addHomeView(): void {
    HomeView.addView();
  }

  public static addGameView(): void {}

  public static clickMenuButton(): void {
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

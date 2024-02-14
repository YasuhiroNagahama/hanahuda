import { Controller } from "../../interfaces/common/Controller";
import { KoikoiTable } from "../../models/koikoki/KoikoiTable";
import { GameView } from "../../views/common/GameView";

class KoikoiController implements Controller {
  private readonly _koikoiTable: KoikoiTable = new KoikoiTable();

  public initializeControllerMethods(): void {
    this.addGameView();
    this.addSettingPage();
    this.handleMenuButton();
  }

  private addGameView(): void {
    GameView.addView();
  }

  public addSettingPage(): void {
    GameView.addSettingView();
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

import { GAMETYPEIDSMAP } from "../../constants/common/GameTypeIds";
import { Controller } from "../../interfaces/common/Controller";
import { GameTypes } from "../../types/common/GameTypes";
import { HomeView } from "../../views/HomeView";

class HomeController {
  private gameType: GameTypes;
  private gameController: Controller | null = null;

  constructor() {
    this.gameType = GameTypes.None;
  }

  public initializeControllerMethods(): void {
    this.addHomeView();
    this.clickMenuButton();
    this.clickGameTypeButton();
  }

  public addHomeView(): void {
    HomeView.addView();
  }

  public clickGameTypeButton(): void {
    const gameTypeButtons: NodeListOf<Element> =
      document.querySelectorAll(".game-type-button")!;

    gameTypeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const gameKey: string = button.id;

        if (GAMETYPEIDSMAP.has(gameKey)) {
          // gameTypeが同じ場合の制御
          this.gameType = GAMETYPEIDSMAP.get(gameKey)!;
        }
      });
    });
  }

  public clickVolumeButton(): void {
    const volumeButton: HTMLElement = document.getElementById("volumeButton")!;

    volumeButton.addEventListener("click", () => {
      console.log("volume button");
    });
  }

  public clickSettingButton(): void {
    const settingButton: HTMLElement =
      document.getElementById("settingButton")!;

    settingButton.addEventListener("click", () => {
      console.log("setting button");
    });
  }

  public clickMenuButton(): void {
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

export { HomeController };

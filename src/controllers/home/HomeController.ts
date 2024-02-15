import { GAMETYPEIDSMAP } from "../../constants/common/GameTypeIds";
import { GAMECONTROLLERSMAP } from "../../constants/common/GameControllers";
import { GameController } from "../../interfaces/common/GameController";
import { GameTypes } from "../../types/common/GameTypes";
import { HomeView } from "../../views/HomeView";

class HomeController {
  private gameType: GameTypes;

  constructor() {
    this.gameType = GameTypes.None;
  }

  public initializeControllerMethods(): void {
    this.addHomeView();
    this.handleMenuButton();
    this.handleGameTypeButton();
    this.handleStartButton();
  }

  private addHomeView(): void {
    HomeView.addView();
  }

  private removeHomeView(): void {
    HomeView.removeView();
  }

  private isNoneGameType(): boolean {
    return this.gameType === GameTypes.None;
  }

  private removeActiveClass(elements: NodeListOf<Element>): void {
    elements.forEach((element) => {
      element.classList.remove("is-active");
    });
  }

  private handleStartButton(): void {
    const startButton: HTMLElement = document.getElementById("startButton")!;
    startButton.addEventListener("click", () => {
      if (!this.isNoneGameType()) {
        if (GAMECONTROLLERSMAP.has(this.gameType)) {
          this.removeHomeView();

          const gameController: GameController = GAMECONTROLLERSMAP.get(
            this.gameType
          )!;
          gameController.initializeControllerMethods();
        } else {
          alert("選択されたゲームは現在開発中です。");
        }
      } else {
        alert("ゲームを選択してください！");
      }
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

  private handleGameTypeButton(): void {
    const gameTypeButtons: NodeListOf<Element> =
      document.querySelectorAll(".game-type-button")!;

    gameTypeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const gameKey: string = button.id;

        if (GAMETYPEIDSMAP.has(gameKey)) {
          // gameTypeが同じ場合の制御
          this.gameType = GAMETYPEIDSMAP.get(gameKey)!;

          this.removeActiveClass(gameTypeButtons);
          button.classList.add("is-active");
        }
      });
    });
  }
}

export { HomeController };

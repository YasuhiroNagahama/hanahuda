import { GAMEPAGE } from "../../config";
import { GameTypes } from "../../types/common/GameTypes";

export class GameView {
  protected addHeader(): void {
    this.addClass();
    GAMEPAGE!.innerHTML += `
    <header>
      <div class="hamburger-menu-bars-wrapper">
        <span class="hamburger-menu-bar"></span>
        <span class="hamburger-menu-bar"></span>
        <span class="hamburger-menu-bar"></span>
      </div>
      <div class="hamburger-menu-buttons-wrapper">
        <div id="topButton" class="hamburger-menu-button-wrapper">
          <button class="hamburger-menu-button dotgothic16-regular">トップ</button>
        </div>
        <div id="rulesButton" class="hamburger-menu-button-wrapper">
          <button class="hamburger-menu-button dotgothic16-regular">ルール</button>
        </div>
        <div id="settingButton" class="hamburger-menu-button-wrapper">
          <button class="hamburger-menu-button dotgothic16-regular">設定</button>
        </div>
        <div id="contactButton" class="hamburger-menu-button-wrapper">
          <button class="hamburger-menu-button dotgothic16-regular">お問い合わせ</button>
        </div>
      </div>
      <div id="volumeButton" class="volume-button-wrapper">
        <i class="fa-solid fa-volume-high"></i>
      </div>
    </header>
  `;
  }

  protected addClass(): void {
    if (GAMEPAGE) {
      GAMEPAGE.classList.add("game-page-wrapper");
    }
  }

  protected removeClass(): void {
    if (GAMEPAGE) {
      GAMEPAGE.classList.remove("game-page-wrapper");
    }
  }
}

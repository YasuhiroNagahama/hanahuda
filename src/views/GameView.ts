import { GAMEPAGE } from "../config";

export class GameView {
  public static addView(): void {
    GAMEPAGE!.innerHTML = `
    <header>
    <div class="hamburger-menu-bars-wrapper">
      <span class="hamburger-menu-bar"></span>
      <span class="hamburger-menu-bar"></span>
      <span class="hamburger-menu-bar"></span>
    </div>
    <div class="hamburger-menu-buttons-wrapper">
      <div class="hamburger-menu-button-wrapper">
        <button class="hamburger-menu-button">トップ</button>
      </div>
      <div class="hamburger-menu-button-wrapper">
        <button class="hamburger-menu-button">ルール</button>
      </div>
      <div class="hamburger-menu-button-wrapper">
        <button class="hamburger-menu-button">設定</button>
      </div>
      <div class="hamburger-menu-button-wrapper">
        <button class="hamburger-menu-button">お問い合わせ</button>
      </div>
    </div>
  </header>`;
  }
}

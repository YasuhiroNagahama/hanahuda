import { HOMEPAGE } from "../config";

export class HomeView {
  public static createView(): void {
    HOMEPAGE!.innerHTML = `
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
          <h1 class="header-text">花札</h1>
        </header>
        <main>
          <div class="game-type-buttons-wrapper">
            <div class="game-type-button-wrapper">
              <button class="game-type-button">こいこい</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">六百間</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">花合わせ</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">八八</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">八八吟味</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">きんご</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">むし</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">えちょぼ</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">おちょいかぶ</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">引きカブ</button>
            </div>
            <div class="game-type-button-wrapper">
              <button class="game-type-button">ポカ</button>
            </div>
          </div>
          <div class="game-start-panel-wrapper">
            <div class="game-start-buttons-wrapper">
              <div class="game-start-button-wrapper game-rules-button-wrapper">
                <button class="game-start-button">ルール設定</button>
              </div>
              <div class="game-start-button-wrapper game-setting-start-button-wrapper">
                <button class="game-start-button">ゲーム開始</button>
              </div>
            </div>
          </div>
        </main>
`;
  }
}

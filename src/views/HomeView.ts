import { HOMEPAGE } from "../config";

export class HomeView {
  public static addView(): void {
    HOMEPAGE!.innerHTML = `
            <header>
            <h1 class="header-text dotgothic16-regular">花札</h1>
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
            <main>
            <div class="game-type-buttons-wrapper">
              <div class="game-type-button-wrapper">
                <button id="koikoi" class="game-type-button dotgothic16-regular">こいこい</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="roppyakken" class="game-type-button dotgothic16-regular">六百間</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="hanaawase" class="game-type-button dotgothic16-regular">花合わせ</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="hachihachi" class="game-type-button dotgothic16-regular">八八</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="hachihachiginmi" class="game-type-button dotgothic16-regular">八八吟味</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="kingo" class="game-type-button dotgothic16-regular">きんご</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="mushi" class="game-type-button dotgothic16-regular">むし</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="echobo" class="game-type-button dotgothic16-regular">えちょぼ</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="ochyoikabu" class="game-type-button dotgothic16-regular">おちょいかぶ</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="hikikabu" class="game-type-button dotgothic16-regular">引きカブ</button>
              </div>
              <div class="game-type-button-wrapper">
                <button id="poka" class="game-type-button dotgothic16-regular">ポカ</button>
              </div>
            </div>
              <div class="game-start-panel-wrapper">
                <div class="game-start-buttons-wrapper">
                  <div class="game-start-button-wrapper game-rules-button-wrapper">
                    <button class="game-start-button dotgothic16-regular">ルール設定</button>
                  </div>
                  <div class="game-start-button-wrapper game-setting-start-button-wrapper">
                    <button class="game-start-button dotgothic16-regular">ゲーム開始</button>
                  </div>
                </div>
              </div>
            </main>
    `;
  }
}

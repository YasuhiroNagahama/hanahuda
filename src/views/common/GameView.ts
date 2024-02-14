import { GAMEPAGE } from "../../config";

export class GameView {
  public static addView(): void {
    this.addClass();
    GAMEPAGE!.innerHTML = `
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
  </header>`;
  }

  public static addSettingView(): void {
    if (GAMEPAGE) {
      GAMEPAGE.innerHTML += `
    <div class="settings-modal-wrapper">
      <h1 class="setting-heading dotgothic16-regular">ゲームの設定</h1>
      <div class="setting-form">
        <div class="setting-elements-wrapper game-count-setting-wrapper">
          <div class="setting-input-wrapper">
            <input type="radio" id="gameCountThree" name="count" value="3"/>
            <label for="gameCountThree" class="setting-text dotgothic16-regular">3回</label>
          </div>
          <div class="setting-input-wrapper">
            <input type="radio" id="gameCountFive" name="count" value="5"/>
            <label for="gameCountFive" class="setting-text dotgothic16-regular">5回</label>
          </div>
          <div class="setting-input-wrapper">
            <input type="radio" id="gameCountTwelve" name="count" value="12"/>
            <label for="gameCountTwelve" class="setting-text dotgothic16-regular">12回</label>
          </div>
        </div>
        <div class="setting-elements-wrapper">
          <div class="setting-input-wrapper">
              <input type="checkbox" id="gameDoubleRule" name="doubleRule"/>
              <label for="gameDoubleRule" class="setting-text dotgothic16-regular">点数倍ルール</label>
          </div>
        </div>
        <div class="setting-elements-wrapper">
          <div class="setting-input-wrapper">
              <input type="checkbox" id="gameNoRole" name="noRole"/>
              <label for="gameNoRole" class="setting-text dotgothic16-regular">役なし時ルール</label>
          </div>
        </div>
        <div class="setting-elements-wrapper">
          <div class="setting-input-wrapper">
              <input type="checkbox" id="gameOptionRole" name="optionRole"/>
              <label for="gameOptionRole" class="setting-text dotgothic16-regular">月見で一杯、花見で一杯</label>
          </div>
        </div>
      </div>
      <div class="setting-button-wrapper">
        <button class="setting-text setting-button dotgothic16-regular">決定</button>
      </div>
    </div>`;
    }
  }

  public static addClass(): void {
    if (GAMEPAGE) {
      GAMEPAGE.classList.add("game-page-wrapper");
    }
  }

  public static removeClass(): void {
    if (GAMEPAGE) {
      GAMEPAGE.classList.remove("game-page-wrapper");
    }
  }
}

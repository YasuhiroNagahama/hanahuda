import { GAMEPAGE } from "../../config";

export class GameView {
  public static addView(): void {
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
  <div id="botView" class='participant-wrapper bot-wrapper'>
    <div class="participant-name-wrapper">
      <p class="participant-name dotgothic16-regular">BOT</p>
    </div>
    <div id="capturedCards" class="participant-captured-cards-wrapper bot-captured-cards-wrapper"></div>
  </div>
  <div id="playerView" class='participant-wrapper player-wrapper'>
    <div class="participant-name-wrapper">
      <p class="participant-name dotgothic16-regular">PLAYER</p>
    </div>
    <div id="capturedCards" class="participant-captured-cards-wrapper player-captured-cards-wrapper"></div>
  </div>
  <div id="fieldCards" class="field-cards-wrapper"></div>
  <div id="deck" class='deck-wrapper'></div>
  `;
  }

  public static addSettingView(): void {
    if (GAMEPAGE) {
      GAMEPAGE.innerHTML += `
      <div class="settings-modal-wrapper">
      <h1 class="setting-form-heading dotgothic16-regular">ゲームの設定</h1>
      <div class="setting-forms-wrapper">
      <div class="round-setting-form setting-form">
      <h1 class="setting-heading dotgothic16-regular">プレイ回数</h1>
        <div class="setting-elements-wrapper round-setting-wrapper">
          <div class="setting-input-wrapper">
            <input class="game-round-input" type="radio" id="gameCountThree" name="count" value="3" checked>
            <label for="gameCountThree" class="setting-text dotgothic16-regular">3回</label>
          </div>
          <div class="setting-input-wrapper">
            <input class="game-round-input" type="radio" id="gameCountFive" name="count" value="5">
            <label for="gameCountFive" class="setting-text dotgothic16-regular">5回</label>
          </div>
          <div class="setting-input-wrapper">
            <input class="game-round-input" type="radio" id="gameCountTwelve" name="count" value="12">
            <label for="gameCountTwelve" class="setting-text dotgothic16-regular">12回</label>
          </div>
        </div>
        </div>
        <div class="option-rules-setting-form setting-form">
        <h1 class="setting-heading dotgothic16-regular">オプションルール</h1>
        <div class="setting-elements-wrapper">
          <div class="setting-input-wrapper">
              <input type="checkbox" id="doublePointsRule" name="doubleRule">
              <label for="doublePointsRule" class="setting-text dotgothic16-regular">点数倍ルール</label>
          </div>
        </div>
        <div class="setting-elements-wrapper">
          <div class="setting-input-wrapper">
              <input type="checkbox" id="noRoleRule" name="noRole">
              <label for="noRoleRule" class="setting-text dotgothic16-regular">役なし時ルール</label>
          </div>
        </div>
        <div class="setting-elements-wrapper">
          <div class="setting-input-wrapper">
              <input type="checkbox" id="optionRoleRule" name="optionRole">
              <label for="optionRoleRule" class="setting-text dotgothic16-regular">月見で一杯、花見で一杯</label>
          </div>
        </div>
        </div>
      </div>
      <div id="decideButton" class="setting-button-wrapper">
        <button class="setting-button dotgothic16-regular">決定</button>
      </div>
    </div>`;
    }
  }

  public static removeSettingView(): void {
    const settingModal: HTMLDivElement = document.querySelector(
      ".settings-modal-wrapper"
    ) as HTMLDivElement;

    settingModal.remove();
  }

  // public static addImage(): void {
  //   if (GAMEPAGE) {
  //     GAMEPAGE.innerHTML += `<img src="../assets/images/hanahuda-1-1.jpg" alt="" class="card-image">`;
  //   }
  // }

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

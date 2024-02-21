import { GAMEPAGE } from "../../config";

class SettingView {
  public addSettingView(): void {
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

  public removeSettingView(): void {
    const settingModal: HTMLDivElement = document.querySelector(
      ".settings-modal-wrapper"
    ) as HTMLDivElement;

    settingModal.remove();
  }
}

export { SettingView };

import { CapturedCards } from "../common/CapturedCards";
import { CardNames } from "../../types/common/CardNames";
import { CardTypes } from "../../types/common/CardTypes";

class KoikoiCapturedCards extends CapturedCards {
  constructor() {
    super();
  }

  public isGokou(): boolean {
    return super.countCardsByType(CardTypes.光札) === 5;
  }

  public isShikou(): boolean {
    return (
      !super.includeCardsByName(CardNames.柳に小野道風) &&
      super.countCardsByType(CardTypes.光札) === 4
    );
  }

  public isAmeshikou(): boolean {
    return super.countCardsByType(CardTypes.光札) === 4;
  }

  public isSankou(): boolean {
    return (
      !super.includeCardsByName(CardNames.柳に小野道風) &&
      super.countCardsByType(CardTypes.光札) === 3
    );
  }

  public isInoshikatyo(): boolean {
    return (
      super.countCardsByName(CardNames.山萩に山猪) +
        super.countCardsByName(CardNames.楓に鹿) +
        super.countCardsByName(CardNames.花王に蝶) ===
      3
    );
  }

  public isAkatann(): boolean {
    return (
      super.countCardsByName(CardNames.梅に赤短) +
        super.countCardsByName(CardNames.桜に赤短) +
        super.countCardsByName(CardNames.松に赤短) ===
      3
    );
  }

  public isAotann(): boolean {
    return (
      super.countCardsByName(CardNames.牡丹に青短) +
        super.countCardsByName(CardNames.紅葉に青短) +
        super.countCardsByName(CardNames.菊に青短) ===
      3
    );
  }

  public isTane(): boolean {
    return super.countCardsByType(CardTypes.種札) >= 5;
  }

  public isTann(): boolean {
    return super.countCardsByType(CardTypes.短冊) >= 5;
  }

  public isKasu(): boolean {
    return super.countCardsByType(CardTypes.カス) >= 10;
  }

  // 以下オプション

  public isHanamideippai(): boolean {
    return (
      super.countCardsByName(CardNames.菊に盃) +
        super.countCardsByName(CardNames.満開の桜に幔幕) ===
      2
    );
  }

  public isTsukimideippai(): boolean {
    return (
      super.countCardsByName(CardNames.菊に盃) +
        super.countCardsByName(CardNames.芒に望月) ===
      2
    );
  }

  // 以下ゲッター

  get taneCardCount(): number {
    return this.countCardsByType(CardTypes.種札);
  }

  get tanCardCount(): number {
    return this.countCardsByType(CardTypes.短冊);
  }

  get kasuCardCount(): number {
    return this.countCardsByType(CardTypes.カス);
  }
}

export { KoikoiCapturedCards };

export class Language {
  constructor(
    private rank: number,
    private name: string,
    private latestVersion: string
  ) {}

  public write(elem: HTMLElement | null): void {
    // 引数がnullでない場合のみ処理を行う
    if (elem) {
      elem.innerHTML +=
        "順位：" +
        this.rank +
        "/言語名:" +
        this.name +
        "/最新バージョン: " +
        this.latestVersion +
        "<br>";
    }
  }
}

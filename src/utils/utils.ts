import { CARDINFOARR } from "../constants/common/CardInfo";
import { PointsCalculator } from "../models/common/PointsCalculator";
import { CardTypes } from "../types/common/CardTypes";
import { GameTypes } from "../types/common/GameTypes";
import { Plants } from "../types/common/Plants";
import { Months } from "../types/common/Months";
import { CardInfo } from "../types/common/CardInfo";
import { RoppyakkennPointCalculator } from "../models/roppyakkenn/RoppyakkennPointCalculator";
import { CommonPointsCalculator } from "../models/common/CommonPointCalculator";

function hasCardPointsGame(gameType: GameTypes): boolean {
  const hasCardPointsGameArr: GameTypes[] = [
    GameTypes.六百間,
    GameTypes.花合わせ,
    GameTypes.むし,
    GameTypes.ポカ,
    GameTypes.引きカブ,
  ];

  return hasCardPointsGameArr.includes(gameType);
}

function getPointsCalculator(gameType: GameTypes): PointsCalculator {
  return gameType === GameTypes.六百間
    ? new RoppyakkennPointCalculator()
    : new CommonPointsCalculator();
}

function selectCardsForGame(gameType: GameTypes): CardInfo[] {
  switch (gameType) {
    case GameTypes.かちかち:
      return selectCardsForKatikati([Months.November, Months.December]);
    case GameTypes.むし:
      return selectCardsForPlants([Plants.牡丹, Plants.萩]);
    case GameTypes.きんご:
    case GameTypes.おちょいかぶ:
    case GameTypes.引きカブ:
      return selectCardsForMonths([Months.November, Months.December]);
    case GameTypes.ポカ:
      return selectCardsForMonths([
        Months.August,
        Months.September,
        Months.October,
        Months.November,
        Months.December,
      ]);
    case GameTypes.えちょぼ:
      return selectCardsForMonths([
        Months.July,
        Months.August,
        Months.September,
        Months.October,
        Months.November,
        Months.December,
      ]);
    default:
      return CARDINFOARR;
  }
}

function selectCardsForKatikati(months: Months[]): CardInfo[] {
  const katikatiMonthsArr: Months[] = [
    Months.January,
    Months.April,
    Months.October,
  ];
  return CARDINFOARR.filter((cardInfo) => {
    const isKasu: boolean = cardInfo.cardType === CardTypes.カス;
    const isStripPaper: boolean = cardInfo.cardType === CardTypes.短冊;

    (!months.includes(cardInfo.months) && isKasu) ||
      (katikatiMonthsArr.includes(cardInfo.months) && isStripPaper);
  });
}

function selectCardsForMonths(months: Months[]): CardInfo[] {
  return CARDINFOARR.filter((cardInfo) => !months.includes(cardInfo.months));
}

function selectCardsForPlants(plants: Plants[]): CardInfo[] {
  return CARDINFOARR.filter((cardInfo) => !plants.includes(cardInfo.plant));
}

export { hasCardPointsGame, getPointsCalculator, selectCardsForGame };

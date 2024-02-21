import { CARD_INFO_ARR } from "../constants/common/CardInfo";
import { PointsCalculator } from "../interfaces/common/PointsCalculator";
import { CommonPointsCalculator } from "../models/common/CommonPointCalculator";
import { RoppyakkennPointCalculator } from "../models/roppyakkenn/RoppyakkennPointCalculator";
import { CardTypes } from "../types/common/CardTypes";
import { GameTypes } from "../types/common/GameTypes";
import { CardInfo } from "../types/common/CardInfo";
import { CardMonths } from "../types/common/CardMonths";
import { CardPlants } from "../types/common/CardPlants";

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
      return selectCardsForKatikati([CardMonths.November, CardMonths.December]);
    case GameTypes.むし:
      return selectCardsForPlants([CardPlants.牡丹, CardPlants.萩]);
    case GameTypes.きんご:
    case GameTypes.おちょいかぶ:
    case GameTypes.引きカブ:
      return selectCardsForMonths([CardMonths.November, CardMonths.December]);
    case GameTypes.ポカ:
      return selectCardsForMonths([
        CardMonths.August,
        CardMonths.September,
        CardMonths.October,
        CardMonths.November,
        CardMonths.December,
      ]);
    case GameTypes.えちょぼ:
      return selectCardsForMonths([
        CardMonths.July,
        CardMonths.August,
        CardMonths.September,
        CardMonths.October,
        CardMonths.November,
        CardMonths.December,
      ]);
    default:
      return CARD_INFO_ARR;
  }
}

function selectCardsForKatikati(months: CardMonths[]): CardInfo[] {
  const katikatiMonthsArr: CardMonths[] = [
    CardMonths.January,
    CardMonths.April,
    CardMonths.October,
  ];
  return CARD_INFO_ARR.filter((cardInfo) => {
    const isKasu: boolean = cardInfo.type === CardTypes.カス;
    const isStripPaper: boolean = cardInfo.type === CardTypes.短冊;

    (!months.includes(cardInfo.month) && isKasu) ||
      (katikatiMonthsArr.includes(cardInfo.month) && isStripPaper);
  });
}

function selectCardsForMonths(months: CardMonths[]): CardInfo[] {
  return CARD_INFO_ARR.filter((cardInfo) => !months.includes(cardInfo.month));
}

function selectCardsForPlants(plants: CardPlants[]): CardInfo[] {
  return CARD_INFO_ARR.filter((cardInfo) => !plants.includes(cardInfo.plant));
}

function delay(ms: number): Promise<void> {
  // eslint-disable-next-line
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export { hasCardPointsGame, getPointsCalculator, selectCardsForGame, delay };

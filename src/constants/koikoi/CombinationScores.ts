import { CombinationTypes } from "../../types/koikoi/CombinationTypes";

const COMBINATION_SCORES: Map<CombinationTypes, number> = new Map<
  CombinationTypes,
  number
>([
  [CombinationTypes.五光, 10],
  [CombinationTypes.四光, 8],
  [CombinationTypes.雨四光, 7],
  [CombinationTypes.三光, 5],
  [CombinationTypes.猪鹿蝶, 5],
  [CombinationTypes.赤短, 5],
  [CombinationTypes.青短, 5],
  [CombinationTypes.花見で一杯, 5],
  [CombinationTypes.月見で一杯, 5],
  [CombinationTypes.たね, 1],
  [CombinationTypes.たん, 1],
  [CombinationTypes.かす, 1],
]);

export { COMBINATION_SCORES };

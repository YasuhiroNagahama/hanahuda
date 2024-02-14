import { GameController } from "../../interfaces/common/GameController";
import { KoikoiController } from "../../controllers/koikoi/KoikoiController";
import { GameTypes } from "../../types/common/GameTypes";

const GAMECONTROLLERSMAP: Map<GameTypes, GameController> = new Map<
  GameTypes,
  GameController
>([
  [GameTypes.こいこい, new KoikoiController()],
  // [GameTypes.六百間, new SomeOtherController()],
  // [GameTypes.花合わせ, new SomeOtherController()],
  // [GameTypes.八八, new SomeOtherController()],
  // [GameTypes.八八吟味, new SomeOtherController()],
  // [GameTypes.きんご, new SomeOtherController()],
  // [GameTypes.むし, new SomeOtherController()],
  // [GameTypes.えちょぼ, new SomeOtherController()],
  // [GameTypes.おちょいかぶ, new SomeOtherController()],
  // [GameTypes.引きカブ, new SomeOtherController()],
  // [GameTypes.ポカ, new SomeOtherController()],
  // [GameTypes.かちかち, new SomeOtherController()],
]);

export { GAMECONTROLLERSMAP };

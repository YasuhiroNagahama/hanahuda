import { GameTypes } from "../../types/common/GameTypes";

const GAMETYPEIDSMAP: Map<string, GameTypes> = new Map<string, GameTypes>([
  ["koikoi", GameTypes.こいこい],
  ["roppyakken", GameTypes.六百間],
  ["hanaawase", GameTypes.花合わせ],
  ["hachihachi", GameTypes.八八],
  ["hachihachiginmi", GameTypes.八八吟味],
  ["kingo", GameTypes.きんご],
  ["mushi", GameTypes.むし],
  ["echobo", GameTypes.えちょぼ],
  ["ochyoikabu", GameTypes.おちょいかぶ],
  ["hikikabu", GameTypes.引きカブ],
  ["poka", GameTypes.ポカ],
  ["kachikachi", GameTypes.かちかち],
  ["none", GameTypes.None],
]);

export { GAMETYPEIDSMAP };

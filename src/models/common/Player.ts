import { Card } from "./Card";
import { Hand } from "./Hand";
import { CapturedCards } from "./CapturedCards";
import { PlayerTypes } from "../../types/common/PlayerTypes";

class Player {
  private readonly _playerName: string;
  private readonly _playerType: PlayerTypes;
  private readonly _hand: Hand;
  private readonly _capturedCards: CapturedCards;

  constructor(playerName: string, playerType: PlayerTypes) {
    this._playerName = playerName;
    this._playerType = playerType;
    this._hand = new Hand();
    this._capturedCards = new CapturedCards();
  }

  public addCard(card: Card): void {
    this._hand.addCard(card);
  }

  public addCapturedCard(card: Card): void {
    this._capturedCards.addCard(card);
  }

  public resetHand(): void {
    this._hand.resetCards();
  }

  public resetCapturedCards(): void {
    this._capturedCards.resetCards();
  }

  get playerName(): string {
    return this._playerName;
  }

  get playerType(): PlayerTypes {
    return this._playerType;
  }

  get hand(): Hand {
    return this._hand;
  }

  get capturedCards(): CapturedCards {
    return this._capturedCards;
  }
}

export { Player };

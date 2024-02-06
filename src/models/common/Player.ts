import { CapturedCards } from "./CapturedCards";
import { Card } from "./Card";
import { Hand } from "./Hand";
import { PlayerTypes } from "../../types/common/PlayerTypes";

class Player {
  private playerName: string;
  private playerType: PlayerTypes;
  private hand: Hand;
  private capturedCards: CapturedCards;

  constructor(playerName: string, playerType: PlayerTypes) {
    this.playerName = playerName;
    this.playerType = playerType;
    this.hand = new Hand();
    this.capturedCards = new CapturedCards();
  }

  addHand(card: Card): void {
    this.hand.addCard(card);
  }

  addCapturedCards(card: Card): void {
    this.capturedCards.addCard(card);
  }

  resetHand(): void {
    this.hand.resetHand();
  }

  resetCapturedCards(): void {
    this.capturedCards.resetCapturedCards();
  }

  getPlayerName(): string {
    return this.playerName;
  }

  getPlayerType(): PlayerTypes {
    return this.playerType;
  }

  getHand(): Hand {
    return this.hand;
  }

  getCapturedCards(): CapturedCards {
    return this.capturedCards;
  }
}

export { Player };

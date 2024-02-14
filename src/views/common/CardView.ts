class CardView {
  private readonly _positionX: number;
  private readonly _positionY: number;
  private readonly _image: string;
  private readonly isFaceUp: boolean = false;

  constructor(positionX: number, positionY: number, image: string) {
    this._positionX = positionX;
    this._positionY = positionY;
    this._image = image;
  }
}

export { CardView };

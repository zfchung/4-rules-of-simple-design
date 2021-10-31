export class Cell {
  isAlive: boolean;
  numberOfNeighbours: number;

  constructor() {
    this.isAlive = false;
    this.numberOfNeighbours = 0;
  }

}

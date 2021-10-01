export class Cell {
  isAlive: boolean;
  numberOfNeighbours: number;

  constructor() {
    this.isAlive = false;
    this.numberOfNeighbours = 0;
  }

  get aliveInNextGeneration() {
    if (this.isAlive) {
      return this.numberOfNeighbours == 2 || this.numberOfNeighbours == 3;
    } else {
      return this.numberOfNeighbours == 3
    }
  }
}

export class Cell {
  isAlive: boolean;
  numberOfNeighbours: number;

  constructor() {
    this.isAlive = false;
    this.numberOfNeighbours = 0;
  }

  get aliveInNextGeneration() {
    if (this.isAlive) {
      return this.isStableNeighborhood();
    } else {
      return this.isGeneticallyFertileNeighbourhood();
    }
  }

  private isGeneticallyFertileNeighbourhood() {
    return this.numberOfNeighbours == 3
  }

  private isStableNeighborhood() {
    return this.numberOfNeighbours == 2 || this.numberOfNeighbours == 3;
  }
}

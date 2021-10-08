import {LivingCell} from "../LivingCell";

export class World {
  livingCells: any[];

  constructor() {
    this.livingCells = []
  }

  get numberOfLivingCells() {
    return this.livingCells.length;
  }

  setLivingAt(location: number[]) {
    const newLivingCell = new LivingCell();
    newLivingCell.positionAt(location);
    this.livingCells.push(newLivingCell);
    return newLivingCell;
  }

  get isEmpty() {
    if (this.numberOfLivingCells == 0) {
      return true;
    } else return false;
  }

  aliveAt(location: number[]) {
    const instanceAtLocationExists = this.setLivingAt(location) instanceof LivingCell;
    return instanceAtLocationExists;
  }

  tick() {
    return new World();
  }

  get empty() {
    this.livingCells.length = 0;
    return this;
  }
}

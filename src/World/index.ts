import {LivingCell} from "../LivingCell";
import {Location} from "../Location";

export class World {
  livingCells: any[];

  constructor() {
    this.livingCells = []
  }

  get numberOfLivingCells() {
    return this.livingCells.length;
  }

  setLivingAt(location: Location) {
    const newLivingCell = new LivingCell(location);
    this.livingCells.push(newLivingCell);
    return newLivingCell;
  }

  get isEmpty() {
    if (this.numberOfLivingCells == 0) {
      return true;
    } else return false;
  }

  aliveAt(location: Location) {
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

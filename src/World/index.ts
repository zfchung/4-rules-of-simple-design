import {LivingCell} from "../LivingCell";
import {Location} from "../Location";

export class World {
  livingCells: LivingCell[];

  constructor() {
    this.livingCells = []
  }

  get numberOfLivingCells() {
    return this.livingCells.length;
  }

  setLivingAt(location: Location) {
    // const newLivingCell = new LivingCell();
    // newLivingCell.positionAt(location);
    const newLivingCell = new LivingCell(location);
    this.livingCells.push(newLivingCell);
    return newLivingCell;
  }

  get isEmpty() {
    return this.numberOfLivingCells === 0;
  }

  aliveAt(location: Location) {
    // this will never be false
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

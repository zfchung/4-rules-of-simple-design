import {LivingCell} from "../LivingCell";

export class World {

  livingCells() {
    return {
      count: LivingCell.countInstance
    }
  }

  setLivingAt(location: number[]) {
    const newLivingCell = new LivingCell();
    newLivingCell.positionAt(location);
    return newLivingCell;
  }

  isEmpty() {
    if (this.livingCells().count == 0) {
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
}

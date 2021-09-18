import {LivingCell} from "../LivingCell";

export class World {
  livingCells() {
    return {
      count : LivingCell.countInstance
    }
  }

  setLivingAt(coordinateX: number, coordinateY: number) {
    const newLivingCell = new LivingCell();
    return newLivingCell.positionAt(coordinateX, coordinateY);
  }
}

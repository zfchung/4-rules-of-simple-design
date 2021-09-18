import {LivingCell} from "../LivingCell";

export class World {
  livingCells() {
    return {
      count : LivingCell.countInstance
    }
  }

  setLivingAt(coordinateX: number, coordinateY: number) {
    const newLivingCell = new LivingCell();
    newLivingCell.positionAt(coordinateX, coordinateY);
    return newLivingCell;
  }

  isEmpty(){
    if(this.livingCells().count == 0){
      return true;
    } else return false;
  }

  aliveAt(coordinateX: number, coordinateY: number){
    const instanceAtLocationExists = this.setLivingAt(coordinateX, coordinateY) instanceof LivingCell;
    return instanceAtLocationExists;
  }
}

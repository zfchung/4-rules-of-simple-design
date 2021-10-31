import {Location} from "../Location";
import {Cell} from "../Cell";

export class DeadCell extends Cell {

  constructor(public location: Location) {
    // 'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
  }

  public isAliveInNextGeneration() {
    return this.isGeneticallyFertileNeighbourhood();
  }

  private isGeneticallyFertileNeighbourhood() {
    return this.numberOfNeighbours == 3;
  }

}

import {Location} from "../Location";
import {Cell} from "../Cell";

export class LivingCell extends Cell {

  constructor(public location: Location) {
    // 'super' must be called before accessing 'this' in the constructor of a derived class.
    super();
  }

  public positionAt() {
    return this.location.coordinate();
  }

  public isStayingAlive() {
    return this.numberOfNeighbours == 2 || this.numberOfNeighbours == 3;
  }
}

import {Location} from "../Location";

export class LivingCell {

  constructor(public location: Location) {
  }

  public positionAt() {
    return this.location.coordinate();
  }
}

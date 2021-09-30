import {Location} from "../Location";

export class LivingCell {
  static countInstance: number = 0;

  constructor() {
    LivingCell.countInstance++;
  }

  positionAt(location: number[]) {
    return location;
  }

}

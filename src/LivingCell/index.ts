export class LivingCell {
  static countInstance: number = 0;

  constructor() {
    LivingCell.countInstance++;
  }

  positionAt(coordinateX: number, coordinateY: number) {
    return [coordinateX, coordinateY];
  }
}

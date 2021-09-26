export class Location {
  coordinateX: number;
  coordinateY: number;
  coordinate: number[];

  constructor(coordinateX: number, coordinateY: number) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.coordinate = [this.coordinateX, this.coordinateY];
  }

  neighbours() {
    // calculate a list of locations that are considered neighbors
    let coordinateList: number[][] = [];
    coordinateList.push([this.coordinateX - 1, this.coordinateY - 1]);
    coordinateList.push([this.coordinateX, this.coordinateY - 1]);
    coordinateList.push([this.coordinateX + 1, this.coordinateY - 1]);
    coordinateList.push([this.coordinateX - 1, this.coordinateY]);
    coordinateList.push([this.coordinateX + 1, this.coordinateY]);
    coordinateList.push([this.coordinateX - 1, this.coordinateY + 1]);
    coordinateList.push([this.coordinateX, this.coordinateY + 1]);
    coordinateList.push([this.coordinateX + 1, this.coordinateY + 1]);
    return coordinateList;
  }

}

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
    let neighbourCoordinateList = getNeighbourCoordinates(this.coordinateX, this.coordinateY);
    return neighbourCoordinateList;
  }

}

function getNeighbourCoordinates(coordinateX: number, coordinateY: number) {
  let coordinateList = [];
  for (let x = (coordinateX - 1); x <= (coordinateX + 1); x++) {
    for (let y = (coordinateY - 1); y <= (coordinateY + 1); y++) {
      let neighbourCoordinate = [x, y];
      if (x !== 1 || y !== 1) {
        coordinateList.push(neighbourCoordinate);
      }
    }
  }

  return coordinateList;
}

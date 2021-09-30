export class Location {
  coordinateX: number;
  coordinateY: number;
  coordinate: number[];
  locations: any[];
  static allLoc: any;

  constructor(coordinateX: number, coordinateY: number) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.coordinate = this.getCoordinate();
    this.locations = [];
    Location.allLoc = this.allLocations;
  }

  getCoordinate() {
    let coordinate = [this.coordinateX, this.coordinateY];
    this.locations.push(coordinate);
    return coordinate;
  }

  neighbours() {
    let neighbourCoordinateList = getNeighbourCoordinates(this.coordinateX, this.coordinateY);
    return neighbourCoordinateList;
  }

  get allLocations() {
    return this.locations;
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

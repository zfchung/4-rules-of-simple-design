export class Location {
  coordinateX: number;
  coordinateY: number;

  constructor(coordinateX: number, coordinateY: number) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  }

  neighbours(): Location[] {
    // getNeighbours would be a better method name
    let neighbourCoordinateList = getNeighbourCoordinates(this.coordinateX, this.coordinateY);
    return neighbourCoordinateList;
  }

}

function getNeighbourCoordinates(coordinateX: number, coordinateY: number): Location[] {
  const coordinateList: Location[] = [];

  for (let x = (coordinateX - 1); x <= (coordinateX + 1); x++) {
    for (let y = (coordinateY - 1); y <= (coordinateY + 1); y++) {
      if (x !== coordinateX || y !== coordinateY) {
        const newLocation = new Location(x, y);
        coordinateList.push(newLocation);
      }
    }
  }

  return coordinateList;
}
